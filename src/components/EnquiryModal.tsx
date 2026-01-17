"use client";

import { useState, useEffect, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "",
          budget: "",
          message: "",
        });
        setTimeout(() => {
          onClose();
          setSubmitStatus("idle");
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 z-10">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {submitStatus === "success" ? (
          <div className="text-center py-8">
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
              Thank You!
            </h3>
            <p className="text-gray-600">We&apos;ll get back to you soon.</p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-text-black mb-2">
              Enquire Now
            </h2>
            <p className="text-grayShade2 mb-6">
              Fill in your details and we&apos;ll get back to you shortly.
            </p>

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

              <div>
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
                  type="email"
                  placeholder="Email (optional)"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="h-12 rounded-xl bg-gray-50 border-0 focus:ring-2 focus:ring-gold-light"
                />
              </div>

              <div>
                <select
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  required
                  className="w-full h-12 px-4 rounded-xl bg-gray-50 border-0 focus:ring-2 focus:ring-gold-light text-gray-700"
                >
                  <option value="">Select Service *</option>
                  <option value="Decor">Decor</option>
                  <option value="Catering">Catering</option>
                  <option value="Makeover">Makeover</option>
                  <option value="Pre-Wedding">Pre-Wedding</option>
                  <option value="Venue">Venue</option>
                  <option value="Event Planning">Event Planning</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <Input
                  type="text"
                  placeholder="Budget (e.g., ₹50,000 - ₹1,00,000)"
                  value={formData.budget}
                  onChange={(e) =>
                    setFormData({ ...formData, budget: e.target.value })
                  }
                  className="h-12 rounded-xl bg-gray-50 border-0 focus:ring-2 focus:ring-gold-light"
                />
              </div>

              <div>
                <textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={3}
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
                className="w-full h-12 bg-gradient-to-r from-gold-light to-gold text-text-black font-semibold rounded-xl hover:opacity-90 transition-opacity"
              >
                {isSubmitting ? "Sending..." : "Submit Enquiry"}
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
