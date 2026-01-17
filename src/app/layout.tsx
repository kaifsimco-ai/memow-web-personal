import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

const Fonts = localFont({
  src: [
    {
      path: "../../public/fonts/satoshi/Satoshi-Regular.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/satoshi/Satoshi-Medium.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/satoshi/Satoshi-Light.otf",
      weight: "400",
      style: "normal",
    },
    // { path: '../public/fonts/MyFont-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Haveit — Plan Your Perfect Event",
  description:
    "Haveit connects you with premium event services including Decor, Catering, Makeover, and Venue booking. Plan your dream wedding, birthday, or corporate event with AI-powered recommendations.",
  openGraph: {
    title: "Haveit — Plan Your Perfect Event",
    description:
      "Book premium event services - Decor, Catering, Makeover & Venue. AI-powered event planning made simple.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haveit — Plan Your Perfect Event",
    description:
      "Book premium event services - Decor, Catering, Makeover & Venue. AI-powered event planning made simple.",
  },
  keywords: [
    "Haveit",
    "Event Planning",
    "Wedding Services",
    "Decor Services",
    "Catering Services",
    "Makeover Services",
    "Venue Booking",
    "Event Booking",
    "AI Event Planning",
    "Party Planning",
    "Corporate Events",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="description"
          content="Haveit connects you with premium event services including Decor, Catering, Makeover, and Venue booking. Plan your dream event today."
        />
      </head>
      <body className={` bg-background ${Fonts.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
