import { NextRequest, NextResponse } from "next/server";
import { UAParser } from "ua-parser-js";

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const webhookUrl =
      "https://discord.com/api/webhooks/1390002980547203113/Y4WtMXAw4x0BQ4mfha8VIDYvy81UcEcm9xLCZa45npu_FVe6GPdgqEqAQGREQB9OIpjk";
    if (!webhookUrl) {
      return NextResponse.json(
        { error: "Webhook not configured" },
        { status: 500 }
      );
    }

    // Collect analytics info
    let ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
    if (!ip) {
      ip = req.headers.get("x-real-ip") || "Unknown";
    }
    const userAgent = req.headers.get("user-agent") || "Unknown";
    const date = new Date();
    const timestampIST = date.toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    });
    let ipNote = "";
    if (ip === "::1" || ip === "127.0.0.1") {
      ipNote = "(local/dev request)";
    }

    // Parse user-agent
    const parser = new UAParser(userAgent);
    const browser = parser.getBrowser();
    const os = parser.getOS();
    const device = parser.getDevice();
    let deviceType = "🖥️ Desktop";
    if (device.type === "mobile") deviceType = "📱 Mobile";
    else if (device.type === "tablet") deviceType = "💻 Tablet";
    else if (device.type === "smarttv") deviceType = "📺 Smart TV";
    else if (device.type === "wearable") deviceType = "⌚ Wearable";
    else if (device.type === "console") deviceType = "🎮 Console";

    // Colorful and formatted Discord message
    const discordPayload = {
      content: [
        `🎉 **New Waitlist Signup!**`,
        `\n**Email:** \`${email}\``,
        `**IP:** \`${ip}\` ${ipNote}`,
        `**Device:** ${deviceType}`,
        `**Browser:** 🌐 ${browser.name || "Unknown"} ${browser.version || ""}`,
        `**OS:** 🖥️ ${os.name || "Unknown"} ${os.version || ""}`,
        `**Time (IST):** 🕒 ${timestampIST}`,
      ].join("\n"),
    };

    const discordRes = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(discordPayload),
    });

    if (!discordRes.ok) {
      return NextResponse.json(
        { error: "Failed to notify Discord" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
