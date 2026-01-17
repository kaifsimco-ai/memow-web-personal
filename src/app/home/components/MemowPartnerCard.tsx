"use client";

import Image from "next/image";
import React, { useState } from "react";
import EnquiryModal from "@/components/EnquiryModal";
import ButtonIC from "@/components/Buttons/ButtonIC";

const HaveitPartnerCard = () => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  return (
    <>
      <section className="w-full h-[720px] md:h-[620px] bg-skin rounded-3xl p-4 md:p-8">
        <section className="flex flex-col md:flex-row items-stretch h-full gap-4 md:gap-6">
          {/* Text section - appears first on mobile */}
          <div className="flex-1 flex flex-col justify-center px-4 md:px-8 order-1 md:order-2">
            <p className="text-border-60 text-xl font-medium mb-3 tracking-wide leading-8">
              Haveit Services
            </p>

            <h2 className="text-3xl md:text-6xl font-bold text-grayShade3 mb-4 md:mb-6 leading-tight">
              Plan your
              <br />
              perfect event
            </h2>

            <p className="text-grayShade3 text-sm md:text-lg mb-6 md:mb-16 leading-relaxed font-medium tracking-wide">
              BOOK THE VIBE, RUN THE SHOW, ALL IN ONE APP. PLANLESS, PARTY MORE.
              GET THE CREW, THE SPACE, ALL FROM YOUR POCKET. BECAUSE GREAT
              EVENTS SHOULDN&apos;T BE A FULL TIME JOB.
            </p>

            <div>
              <ButtonIC
                label="Enquire Now"
                className={
                  "inline-flex items-center gap-3 px-4 md:px-6 py-2 md:py-3 bg-white border border-border-80 rounded-full hover:opacity-90 transition-opacity"
                }
                labelStyle={"text-sm md:text-base font-medium text-grayShade3"}
                icon={
                  <Image
                    src="/images/icons/buttonIcons/arrow-right-icon.svg"
                    className="h-4 w-4 md:h-5 md:w-5"
                    height={20}
                    width={20}
                    alt={"arrow-icon"}
                  />
                }
                iconPosition="end"
                onClick={() => setIsEnquiryOpen(true)}
              />
            </div>
          </div>

          {/* Image section - appears second on mobile */}
          <div className="flex-1 bg-border-80 rounded-3xl border border-gold-light p-4 md:p-6 flex flex-col order-2 md:order-1 min-h-[300px] md:min-h-0">
            {/* Logo and title */}
            <div className="flex flex-row items-center gap-3 mb-4 md:mb-6">
              <Image
                src={"/HaveitLogo.svg"}
                className="h-8 w-8 md:h-11 md:w-11"
                height={44}
                width={44}
                alt="Haveit Logo"
              />
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl text-white font-medium leading-none">
                  Haveit
                </span>
                <span className="text-xs text-white font-light leading-none tracking-wider">
                  EVENTS
                </span>
              </div>
            </div>

            {/* Main illustration - centered and properly sized */}
            <div className="flex-1 flex items-center justify-center">
              <Image
                src={"/images/homepage/becomePartner.svg"}
                className="max-h-full max-w-full object-contain"
                height={400}
                width={400}
                alt="Event illustration"
              />
            </div>
          </div>
        </section>
      </section>

      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
      />
    </>
  );
};

export default HaveitPartnerCard;
