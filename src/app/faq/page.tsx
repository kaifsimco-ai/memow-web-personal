"use client";

import AppLogo from "@/components/Global/AppLogo";
import FaqAccordion from "@/components/Global/Accordian";
import React from "react";
import Link from "next/link";

const faqData = [
  {
    question: "What services does Haveit offer?",
    answer:
      "Haveit offers comprehensive event services including Decor, Catering, Makeover/Beauty services, and Venue booking. We connect you with verified vendors for all your event needs.",
  },
  {
    question: "How do I book a service?",
    answer:
      "You can book a service by browsing our service categories, selecting your preferred vendor, and filling out the booking form. Our team will then contact you to confirm the details.",
  },
  {
    question: "What is the minimum order value for B2B bookings?",
    answer:
      "For B2B bookings, we only accept orders above ₹1 Lakh per service. This ensures we can provide premium quality services for larger events.",
  },

  {
    question: "Are the vendors verified?",
    answer:
      "Yes, all vendors on Haveit go through a verification process including KYC checks, portfolio review, and background verification. We also collect and display genuine customer reviews.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major payment methods including UPI, credit/debit cards, net banking, and bank transfers. All payments are processed through secure, RBI-compliant payment gateways.",
  },
  {
    question: "Can I cancel or reschedule my booking?",
    answer:
      "Yes, you can cancel or reschedule your booking subject to our cancellation policy. Please contact our support team at least 48 hours before your event for any changes.",
  },
  {
    question: "Is Haveit available in my city?",
    answer:
      "Currently, Haveit is available only in India. We are continuously expanding our network. Contact us to check availability in your specific location.",
  },
  {
    question: "How can I become a vendor on Haveit?",
    answer:
      "If you're a service provider, you can apply to become a vendor by clicking on 'Enquire Now' and selecting your service category. Our team will guide you through the onboarding process.",
  },
  {
    question: "How do I contact support?",
    answer:
      "You can reach our support team via email at memow@memowry.com or call us at +91 9876544964. We're available Monday to Saturday, 10 AM to 7 PM IST.",
  },
];

const FAQPage = () => {
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
        <main className="flex flex-col gap-8 text-grayShade3 font-satoshi pb-20">
          {/* Hero Section */}
          <section className="flex flex-col gap-4 text-center mb-8">
            <h1 className="text-3xl md:text-5xl font-bold text-black">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-grayShade2 max-w-2xl mx-auto">
              Find answers to common questions about Haveit&apos;s event
              services, bookings, and more.
            </p>
          </section>

          {/* FAQ Accordion */}
          <section className="w-full max-w-2xl mx-auto">
            <FaqAccordion data={faqData} />
          </section>

          {/* Still Have Questions CTA */}
          <section className="flex flex-col gap-4 text-center bg-gray-50 p-8 rounded-2xl mt-8">
            <h2 className="text-2xl font-bold text-black">
              Still Have Questions?
            </h2>
            <p className="text-base text-grayShade2 mb-4">
              Can&apos;t find what you&apos;re looking for? Our team is here to
              help.
            </p>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="bg-skin hover:bg-gold-light text-black font-medium py-3 px-6 rounded-full transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </section>
        </main>
      </section>
    </section>
  );
};

export default FAQPage;
