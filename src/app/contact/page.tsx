"use client";

import AppLogo from "@/components/Global/AppLogo";
import React, { useState, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AiFillInstagram, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";

const ContactPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          service: "Contact Form",
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        // Redirect to homepage after 2 seconds
        setTimeout(() => {
          router.push("/");
        }, 2000);
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Contact Us
            </h1>
            <p className="text-lg text-grayShade2 max-w-2xl mx-auto">
              Have questions or need assistance? We&apos;d love to hear from
              you.
            </p>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <section className="flex flex-col gap-6">
              <h2 className="text-2xl font-bold text-black">
                Send Us a Message
              </h2>

              {submitStatus === "success" ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600">
                    We&apos;ll get back to you soon. Redirecting to homepage...
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="h-12 rounded-xl bg-gray-50 border-0 focus:ring-2 focus:ring-gold-light"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      type="email"
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="h-12 rounded-xl bg-gray-50 border-0 focus:ring-2 focus:ring-gold-light"
                    />
                    <Input
                      type="tel"
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      required
                      className="h-12 rounded-xl bg-gray-50 border-0 focus:ring-2 focus:ring-gold-light"
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="h-12 rounded-xl bg-gray-50 border-0 focus:ring-2 focus:ring-gold-light"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message *"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 border-0 focus:ring-2 focus:ring-gold-light resize-none"
                    />
                  </div>

                  {submitStatus === "error" && (
                    <p className="text-red-500 text-sm">
                      Something went wrong. Please try again.
                    </p>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-skin hover:bg-gold-light text-black font-semibold rounded-xl transition-colors"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </section>

            {/* Contact Information */}
            <section className="flex flex-col gap-8">
              <div>
                <h2 className="text-2xl font-bold text-black mb-6">
                  Get in Touch
                </h2>
                <div className="flex flex-col gap-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-skin rounded-full flex items-center justify-center flex-shrink-0">
                      <Image
                        src="/images/icons/customIcons/location.svg"
                        height={24}
                        width={24}
                        alt="Location"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black mb-1">Address</h3>
                      <p className="text-grayShade2 text-sm">
                        Kalyanpur Road, South 24 Parganas,
                        <br />
                        Baruipur, West Bengal India, 700144
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-skin rounded-full flex items-center justify-center flex-shrink-0">
                      <Image
                        src="/images/icons/customIcons/sms.svg"
                        height={24}
                        width={24}
                        alt="Email"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black mb-1">Email</h3>
                      <a
                        href="mailto:memow@memowry.com"
                        className="text-grayShade2 text-sm hover:text-gold-light transition-colors"
                      >
                        memow@memowry.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-skin rounded-full flex items-center justify-center flex-shrink-0">
                      <Image
                        src="/images/icons/customIcons/call.svg"
                        height={24}
                        width={24}
                        alt="Phone"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-black mb-1">Phone</h3>
                      <a
                        href="tel:+919876544964"
                        className="text-grayShade2 text-sm hover:text-gold-light transition-colors"
                      >
                        +91 9876544964
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-semibold text-black mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-skin rounded-full flex items-center justify-center hover:bg-gold-light transition-colors"
                  >
                    <AiFillLinkedin color="#7B692B" size={24} />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-skin rounded-full flex items-center justify-center hover:bg-gold-light transition-colors"
                  >
                    <AiFillInstagram color="#7B692B" size={24} />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-skin rounded-full flex items-center justify-center hover:bg-gold-light transition-colors"
                  >
                    <AiFillYoutube color="#7B692B" size={24} />
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="font-semibold text-black mb-3">
                  Business Hours
                </h3>
                <div className="text-sm text-grayShade2 space-y-1">
                  <p>Monday - Saturday: 10:00 AM - 7:00 PM IST</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </section>
          </div>
        </main>
      </section>
    </section>
  );
};

export default ContactPage;
