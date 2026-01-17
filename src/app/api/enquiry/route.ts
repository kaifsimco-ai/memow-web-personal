import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, phone, email, service, message } = body;

        // Validate required fields
        if (!name || !phone || !service) {
            return NextResponse.json(
                { error: 'Name, phone, and service are required' },
                { status: 400 }
            );
        }

        // Discord webhook URL from environment variable
        const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

        if (!webhookUrl) {
            console.error('DISCORD_WEBHOOK_URL not configured');
            // Still return success to user - we can handle this gracefully
            return NextResponse.json({ success: true, message: 'Enquiry received' });
        }

        // Create Discord embed message
        const discordPayload = {
            embeds: [
                {
                    title: '🎉 New Enquiry Received!',
                    color: 0xFFC000, // Gold color
                    fields: [
                        { name: '👤 Name', value: name, inline: true },
                        { name: '📱 Phone', value: phone, inline: true },
                        { name: '📧 Email', value: email || 'Not provided', inline: true },
                        { name: '🎯 Service', value: service, inline: true },
                        { name: '💬 Message', value: message || 'No message', inline: false },
                    ],
                    timestamp: new Date().toISOString(),
                    footer: {
                        text: 'Haveit Enquiry System'
                    }
                }
            ]
        };

        // Send to Discord
        const discordResponse = await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(discordPayload)
        });

        if (!discordResponse.ok) {
            console.error('Failed to send to Discord:', await discordResponse.text());
        }

        return NextResponse.json({ success: true, message: 'Enquiry submitted successfully' });

    } catch (error) {
        console.error('Enquiry API error:', error);
        return NextResponse.json(
            { error: 'Failed to process enquiry' },
            { status: 500 }
        );
    }
}
