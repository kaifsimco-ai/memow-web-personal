import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { eventName, startAt, endAt, selectDate, guestCount, eventType, venuePreference, cityState, budget } = body;

        // Validate required fields
        if (!eventName) {
            return NextResponse.json(
                { error: 'Event name is required' },
                { status: 400 }
            );
        }

        // Discord webhook URL from environment variable
        const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

        if (!webhookUrl) {
            console.error('DISCORD_WEBHOOK_URL not configured');
            return NextResponse.json({ success: true, message: 'Booking received' });
        }

        // Create Discord embed message for B2B booking
        const discordPayload = {
            embeds: [
                {
                    title: '🎊 New B2B Event Booking!',
                    color: 0xFFC000, // Gold color
                    fields: [
                        { name: '📋 Event Name', value: eventName || 'Not specified', inline: true },
                        { name: '📅 Date', value: selectDate || 'Not specified', inline: true },
                        { name: '⏰ Time', value: `${startAt || 'TBD'} - ${endAt || 'TBD'}`, inline: true },
                        { name: '👥 Guest Count', value: guestCount || 'Not specified', inline: true },
                        { name: '🎫 Event Type', value: eventType || 'Not specified', inline: true },
                        { name: '💰 Budget', value: budget ? `₹${budget} Lakh` : 'Not specified', inline: true },
                        { name: '📍 Venue Preference', value: venuePreference || 'Not specified', inline: true },
                        { name: '🌍 City/State', value: cityState || 'Not specified', inline: true },
                    ],
                    timestamp: new Date().toISOString(),
                    footer: {
                        text: 'Haveit B2B Booking System'
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

        return NextResponse.json({ success: true, message: 'B2B Booking submitted successfully' });

    } catch (error) {
        console.error('B2B Booking API error:', error);
        return NextResponse.json(
            { error: 'Failed to process booking' },
            { status: 500 }
        );
    }
}
