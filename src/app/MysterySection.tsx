"use client";
import { useEffect, useState } from "react";
// Just for deployment
export default function MysterySection() {
  const [showMystery, setShowMystery] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShowMystery(true), 1000);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className={`memow-mystery-section transition-opacity duration-1000 ease-in-out text-center px-4 max-w-xl mx-auto ${
        showMystery ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!showMystery}
    >
      <div className="font-playfair text-lg sm:text-xl text-gold mb-2 mt-8">
        It&apos;s not just an app. It&apos;s a new way to experience your
        moments.
      </div>
      <div className="font-inter text-base text-gray-500 mb-8">
        We&apos;re quietly working behind the scenes.
      </div>
    </section>
  );
}
