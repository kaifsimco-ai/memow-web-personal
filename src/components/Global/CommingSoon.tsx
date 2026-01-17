import React from "react";
import Image from "next/image";
import Newsletter from "./NewsLetter";
import { FOOT_IMAGES } from "@/utils/Constants/Data";

const CommingSoon = () => {
  // const imageData = [
  //   "/images/commingSoon/model1.jpg",
  //   "/images/commingSoon/model2.jpg",
  //   "/images/commingSoon/model3.jpg",
  //   "/images/commingSoon/model4.jpg",
  // ];

  return (
    <main
      className="flex flex-col justify-center items-center w-full max-w-2xl mx-auto px-4 py-2"
      aria-label="Haveit Coming Soon"
    >
      {/* Header: Logo & Availability */}
      <header
        className="flex flex-col justify-center items-center"
        role="banner"
      >
        <div className="mb-2">
          <Image
            src="/Logo.svg"
            className="h-[75px] w-[75px]"
            height={75}
            width={75}
            alt="Memow logo"
          />
        </div>
        <div
          className="flex items-center justify-center gap-2 border border-[#737373] rounded-full px-4 py-1"
          aria-label="Availability"
        >
          <Image
            src="/Orb.svg"
            className="h-4 w-4"
            height={16}
            width={16}
            alt="Availability orb"
          />
          <h2
            className="text-[#737373] text-sm font-medium"
            id="availability-text"
          >
            Available In Early September
          </h2>
        </div>
      </header>

      {/* Main Heading and Description */}
      <section
        className="text-center mb-8 relative mt-6 w-full"
        aria-labelledby="main-heading"
      >
        {/* Indian Flag circle */}
        <div className="absolute z-10 left-1/2 -translate-x-1/2 top-[16%] sm:top-[33%] md:top-[30%] w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full">
          <Image
            src="/images/commingSoon/IndianFlag.png"
            className="h-full w-full object-cover rounded-full border border-gold-light"
            height={32}
            width={32}
            alt="Indian flag"
          />
        </div>
        {/* Main Heading */}
        <h1
          className="text-2xl sm:text-3xl md:text-5xl leading-normal font-medium"
          id="main-heading"
        >
          Building an AI that makes booking event
          <span className="text-gold-light"> faster</span>
        </h1>
        {/* Description */}
        <p className=" mt-5 w-full max-w-lg mx-auto text-sm sm:text-base text-[#a3a3a3]">
          Haveit is launching soon to provide the best AI-powered event booking
          experience. Join our waitlist to be the first to experience the future
          of event planning.
        </p>
      </section>

      {/* Newsletter Form */}
      <section className="mb-8 w-full" aria-label="Newsletter waitlist">
        <Newsletter />
      </section>

      {/* Waitlist Avatars & Count */}
      <footer
        className="text-center text-sm text-gray-500"
        aria-label="Waitlist avatars and count"
      >
        <div className="flex flex-wrap justify-center items-center gap-2">
          <ul className="flex -space-x-2" aria-label="Waitlist avatars">
            {FOOT_IMAGES.map((item, index) => (
              <li
                key={index}
                className="w-8 h-8 rounded-full border border-white overflow-hidden"
                aria-hidden="true"
              >
                <Image
                  src={item}
                  className="w-full h-full object-cover rounded-full border-gold-light border"
                  height={32}
                  width={32}
                  alt="Waitlist member avatar"
                />
              </li>
            ))}
          </ul>
          <span id="waitlist-count" aria-live="polite">
            Join 20+ other people on the waitlist
          </span>
        </div>
      </footer>
    </main>
  );
};

export default CommingSoon;
