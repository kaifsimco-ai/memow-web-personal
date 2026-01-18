"use client";

import ButtonIC from "@/components/Buttons/ButtonIC";
import ChipIc from "@/components/chip/ChipIc";
import Image from "next/image";
import React, { useState } from "react";
import Line from "./Line";
import EventCard from "./EventCard";
import WeddingCard from "./WeddingCard";
import EnquiryModal from "@/components/EnquiryModal";

const Header = () => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  return (
    <>
      <header
        className="md:min-h-screen rounded-2xl  
                           flex flex-col md:flex-row
                           gap-y-10 md:gap-y-0
                           p-4 lg:pr-8 overflow-hidden "
      >
        {/* Left section for heading */}
        <section
          className="w-full md:w-1/2 flex flex-col justify-center gap-8
                              items-center  md:items-start md:text-left md:pl-4"
        >
          <div>
            <div className="w-35">
              <ChipIc
                label={"ONLY IN INDIA"}
                icon={"/images/commingSoon/IndianFlag.png"}
                className="flex flex-row border-1 border-gold p-2 w-auto"
                iconClassName={
                  "border-1 border-gold rounded-full border-[1.5px] "
                }
                labelClassName="font-satoshi font-light text-[14px] text-grayShade"
              />
            </div>
            <p className="text-6xl sm:text-7xl lg:text-[120px] lg:leading-[123px] text-[#474747] font-semibold mt-4">
              Event Bookings
            </p>
            <p className="text-base font-light text-grayShade mt-6 max-w-md leading-normal">
              FIND AND BOOK WIDE RANGE OF DIFFERENT SERVICES, RANGING FROM
              EVENT, VALET, CREATIVE, RENTAL SERVICES. TRACK ANAD MANAGE THE
              ENTIRE SERVICE PROCESS AND THE PAYMENT OF THE SERVICES.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center md:justify-start">
            <ButtonIC
              onClick={() => setIsEnquiryOpen(true)}
              label="Book Event"
              className="border border-brown-80 bg-skin py-2 px-4 gap-2"
              iconPosition="end"
              icon={
                <Image
                  alt="arrow-icon"
                  src={"/images/icons/buttonIcons/arrow-circle-down.svg"}
                  height={20}
                  width={20}
                />
              }
            />
            <ButtonIC
              label="Enquire Now"
              className="border-2 border-brown-80 bg-brown-80 px-4 py-2 text-white"
              labelStyle="text-white"
              onClick={() => setIsEnquiryOpen(true)}
              icon={
                <Image
                  src={"/images/icons/buttonIcons/arrow-right-icon.svg"}
                  height={20}
                  width={20}
                  alt="enquiry-icon"
                  className="invert"
                />
              }
              iconPosition="end"
            />
          </div>
        </section>

        {/* Right section for images */}
        <section className="hidden md:block w-full md:w-1/2 flex justify-center items-center relative min-h-[400px] md:min-h-0 overflow-hidden">
          {/* Background Orb */}
          <div className="absolute flex justify-center items-center w-[300px] h-[300px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] z-30">
            <Image
              src="/images/homepage/OrangeOrb_home.svg"
              alt="orange-orb"
              fill
              className="object-contain"
            />
          </div>
          <Line />

          {/* Top Image Card */}
          <div className="absolute top-0 left-0 sm:left-4 md:left-0 z-40 w-[180px] sm:w-[219px] md:w-[280px] lg:w-[341px]">
            <EventCard />
          </div>

          {/* Bottom Image Card */}
          <div className="absolute bottom-1 right-0 sm:right-4 md:-right-4 md:bottom-0 z-40 w-[180px] sm:w-[219px] md:w-[280px] lg:w-[341px]">
            <WeddingCard />
          </div>

          {/* Chips - Hidden on mobile to prevent overflow */}
          {/* <div className="hidden lg:block">
            <ChipIc
              label={"Book Event"}
              iconPosition={"end"}
              icon={"/images/icons/buttonIcons/arrow-circle-down.svg"}
              className="flex flex-row gap-2 items-center absolute z-30 bottom-69 p-2 py-2 rounded-full left-20 border-2 border-brown-60 bg-skin"
            />
            <ChipIc
              label={"Rental service"}
              icon={"/images/icons/buttonIcons/house-2.svg"}
              className="flex flex-row gap-2 items-center absolute bottom-35 p-2 left-22 border-2 border-brown-60 py-2 rounded-full"
            />
          </div> */}
        </section>
      </header>

      {/* Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
      />
    </>
  );
};

export default Header;
