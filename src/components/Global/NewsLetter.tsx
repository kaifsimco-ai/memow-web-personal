"use client";

import React, { useState } from "react";
import { MdMail } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2 } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);
    setError("");
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/notify-discord", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        setSuccess(false);
      } else {
        setSuccess(true);
        setEmail("");
      }
    } catch {
      setError("Network error. Please try again.");
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      className="w-full max-w-md mx-auto px-4"
      onSubmit={handleSubmit}
      aria-label="Newsletter signup"
    >
      <div className="flex flex-col space-y-3">
        <div className="relative">
          <Label htmlFor="newsletter-email" className="sr-only">
            Email address
          </Label>
          <div className="relative">
            <MdMail
              color="#7B692B80"
              className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <Input
              id="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="pl-10 py-3 rounded-4xl border-gray-300 focus:border-gold-light focus:ring-gold-light"
              aria-describedby={
                error
                  ? "newsletter-error"
                  : success
                  ? "newsletter-success"
                  : undefined
              }
              required
              autoComplete="email"
              disabled={loading}
            />
          </div>
        </div>

        <Button
          type="submit"
          className="w-full py-3 bg-gold text-text-black font-normal text-xl rounded-4xl hover:bg-gold-light transition"
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            "Get early access"
          )}
        </Button>

        {error && (
          <Alert variant="destructive" id="newsletter-error">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {success && (
          <Alert
            className="border-green-200 bg-green-50"
            id="newsletter-success"
          >
            <AlertDescription className="text-green-700">
              Thank you for subscribing!
            </AlertDescription>
          </Alert>
        )}
      </div>
    </form>
  );
};

export default Newsletter;
