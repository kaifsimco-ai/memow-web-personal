"use client";

import AppLogo from "@/components/Global/AppLogo";
import React from "react";
import Link from "next/link";

const AboutUs = () => {
  return (
    <section className="min-h-screen w-full flex flex-col items-center bg-white overflow-hidden">
      <section className="w-full max-w-5xl flex flex-col px-4 sm:px-6 md:px-10 py-6">
        {/* HEADER */}
        <header className="flex flex-col md:flex-row items-center justify-between py-4 md:py-6 gap-4 border-b border-gray-100 mb-8">
          <Link href="/">
            <AppLogo />
          </Link>
        </header>

        {/* CONTENT */}
        <main className="flex flex-col gap-12 text-grayShade3 font-satoshi pb-20">
          {/* Hero Section */}
          <section className="flex flex-col gap-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-black">
              About Haveit
            </h1>
            <p className="text-lg text-grayShade2 max-w-2xl mx-auto">
              We&apos;re building the future of event planning in India — making
              it simpler, faster, and more delightful.
            </p>
          </section>

          {/* Mission Section */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-black">Our Mission</h2>
            <p className="text-base leading-relaxed">
              At Haveit, we believe every celebration deserves to be perfect.
              Our mission is to connect you with first-class event services —
              from decor and catering to makeovers and venues — all in one
              seamless platform. We leverage AI-powered recommendations to match
              you with the right vendors, ensuring your event vision becomes
              reality.
            </p>
          </section>

          {/* What We Offer Section */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-black">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-skin p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-black mb-2">
                  🎨 Decor Services
                </h3>
                <p className="text-sm text-grayShade2">
                  Transform your venue with stunning decorations and themed
                  setups that bring your vision to life.
                </p>
              </div>
              <div className="bg-skin p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-black mb-2">
                  🍽️ Catering Services
                </h3>
                <p className="text-sm text-grayShade2">
                  Delight your guests with exquisite cuisine from traditional
                  Indian delicacies to international flavors.
                </p>
              </div>
              <div className="bg-skin p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-black mb-2">
                  💄 Makeover Services
                </h3>
                <p className="text-sm text-grayShade2">
                  Look your absolute best with expert makeup artists and
                  stylists for your special day.
                </p>
              </div>
              <div className="bg-skin p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-black mb-2">
                  🏛️ Venue Booking
                </h3>
                <p className="text-sm text-grayShade2">
                  Find the perfect venue for your celebration, from intimate
                  gatherings to grand events.
                </p>
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-black">
              Why Choose Haveit?
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-base">
              <li>
                <span className="font-semibold">Trusted Vendors</span> — All our
                service providers are verified and rated by real customers.
              </li>
              <li>
                <span className="font-semibold">Transparent Pricing</span> — No
                hidden fees. Get clear quotes upfront.
              </li>
              <li>
                <span className="font-semibold">End-to-End Support</span> — From
                booking to event day, we&apos;re with you every step of the way.
              </li>
            </ul>
          </section>

          {/* Contact CTA */}
          <section className="flex flex-col gap-4 text-center bg-gray-50 p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-black">
              Ready to Plan Your Event?
            </h2>
            <p className="text-base text-grayShade2 mb-4">
              Get in touch with us today and let&apos;s make your celebration
              unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-skin hover:bg-gold-light text-black font-medium py-3 px-6 rounded-full transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/"
                className="bg-brown-80 hover:bg-brown-60 text-white font-medium py-3 px-6 rounded-full transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </section>
        </main>
      </section>
    </section>
  );
};

export default AboutUs;
