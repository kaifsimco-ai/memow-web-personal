import ButtonIC from "@/components/Buttons/ButtonIC";
import ChipIc from "@/components/chip/ChipIc";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Services = () => {
  return (
    <section className="min-h-screen mt-[170px] flex flex-col px-1">
      <div className=" mb-3.5">
        <p className="text-[24px] md:text-[24px] font-medium leading-8 text-gold-light">
          Services
        </p>
      </div>
      <section className="flex flex-col md:flex-row  mb-18">
        <div className="md:w-[60%] mb-5">
          <p className="md:text-md-54 text-md-32 text-text-black leading-[38px] md:leading-[62px] font-medium">
            We connect you with{" "}
            <span className="text-gold-light">first-class</span> services with
            prices within your range.
          </p>
        </div>
        <div className=" md:w-[40%]">
          <p className="pb-4 text-grayShade2 text-sm-16 font-normal leading-normal">
            FIND AND BOOK WIDE RANGE OF DIFFERENT SERVICES, RANGING FROM DECOR,
            CATERING, MAKEOVER, AND VENUE SERVICES. TRACK AND MANAGE THE ENTIRE
            SERVICE PROCESS.
          </p>
        </div>
      </section>

      {/* Grid layout */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Decor Card - Full height on left */}
        <Link
          href="/services/decor"
          className="md:col-span-1 md:row-span-2 bg-skin border-2 border-goldShade2 rounded-2xl p-4 flex flex-col hover:shadow-xl transition-shadow duration-300"
        >
          <div className="flex-1">
            <div className="flex flex-row justify-between items-start pb-3">
              <p className="text-2xl md:text-3xl font-medium leading-normal text-text-black">
                Decor
              </p>
              <ChipIc
                label={"#Popular"}
                className="bg-skin border-1 border-brown-60"
                labelClassName="text-brown-60"
              />
            </div>
            <div className="mb-4">
              <p className="text-sm-16 font-normal leading-normal text-grayShade2 mb-3">
                Transform your venue with stunning decorations and themed setups
                that bring your vision to life.
              </p>
              <ButtonIC
                label="View Gallery"
                className={
                  "border-2 px-4 py-2 gap-2 border-border-80 bg-brown-80 flex flex-row items-center"
                }
                labelStyle={"text-sm-16 leading-normal font-normal text-white"}
                icon={
                  <Image
                    src="/images/icons/buttonIcons/arrow-right-icon.svg"
                    className="h-6 w-6"
                    height={26}
                    width={26}
                    alt={"arrow-icon"}
                  />
                }
                iconPosition="end"
              />
            </div>
          </div>
          <div className="flex justify-center mt-auto min-h-[300px] md:min-h-[400px]">
            <Image
              src={"/Decor.svg"}
              height={400}
              width={280}
              style={{
                filter:
                  "invert(26%) sepia(77%) saturate(500%) hue-rotate(1deg) brightness(85%) contrast(100%)",
                objectFit: "contain",
                width: "100%",
                height: "100%",
              }}
              alt="decor-service"
            />
          </div>
        </Link>

        {/* Catering Card - Top right */}
        <Link
          href="/services/catering"
          className="md:col-span-2 bg-skin border-2 border-goldShade2 rounded-2xl p-4 overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          <div className="flex flex-col md:flex-row h-full">
            <div className="flex-1 md:pr-4 ">
              <div className="mb-4">
                <p className="text-2xl md:text-3xl font-medium leading-normal text-text-black mb-3">
                  Catering
                </p>
                <p className="text-sm-16 font-normal leading-normal text-grayShade2 mb-3">
                  Delight your guests with exquisite cuisine from traditional
                  Indian delicacies to international flavors.
                </p>
                <ButtonIC
                  label="View Gallery"
                  className={
                    "border-2 px-4 py-2 gap-2 border-border-80 bg-brown-80 flex flex-row items-center"
                  }
                  labelStyle={
                    "text-sm-16 leading-normal font-normal text-white"
                  }
                  icon={
                    <Image
                      src="/images/icons/buttonIcons/arrow-right-icon.svg"
                      className="h-6 w-6"
                      height={26}
                      width={26}
                      alt={"arrow-icon"}
                    />
                  }
                  iconPosition="end"
                />
              </div>
              <div className="flex flex-row gap-3">
                <ChipIc
                  label={"#Popular"}
                  className="bg-skin border-1 border-brown-60 px-2 py-1"
                  size="sm"
                  labelClassName="text-brown-60"
                />
                <ChipIc
                  label={"#Recommended"}
                  className="bg-skin border-1 border-brown-60 px-2 py-1"
                  size="sm"
                  labelClassName="text-brown-60"
                />
              </div>
            </div>
            <div className="flex-shrink-0 flex  items-center justify-center md:w-[400px] min-h-[180px] md:min-h-[200px]">
              <Image
                src={"/Catering.svg"}
                className="object-contain"
                height={200}
                width={200}
                style={{
                  filter:
                    "invert(26%) sepia(77%) saturate(500%) hue-rotate(1deg) brightness(85%) contrast(100%)",
                  minHeight: "180px",
                }}
                alt="catering-service"
              />
            </div>
          </div>
        </Link>

        {/* Makeover Card - Bottom left */}
        <Link
          href="/services/makeover"
          className="bg-skin border-2 border-goldShade2 rounded-2xl p-4 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
        >
          <div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-2xl md:text-3xl font-medium leading-normal text-text-black">
                Makeover
              </h3>
              <ChipIc
                label={"#Trending"}
                className="bg-skin border-1 border-brown-60 px-2 py-1"
                size="sm"
                labelClassName="text-brown-60"
              />
            </div>
            <p className="text-sm-16 font-normal leading-normal text-grayShade2 mb-3">
              Look your absolute best with our expert makeup artists and
              stylists.
            </p>
            <ButtonIC
              label="View Gallery"
              className={
                "border-2 px-4 py-2 gap-2 border-border-80 bg-brown-80 flex flex-row items-center"
              }
              labelStyle={"text-sm-16 leading-normal font-normal text-white"}
              icon={
                <Image
                  src="/images/icons/buttonIcons/arrow-right-icon.svg"
                  className="h-6 w-6"
                  height={26}
                  width={26}
                  alt={"arrow-icon"}
                />
              }
              iconPosition="end"
            />
          </div>
          <div className="flex justify-center mt-4">
            <div className="w-full max-w-[150px] h-[150px] md:max-w-[300px] md:h-[300px] flex items-center justify-center">
              <Image
                src="/Makeup.svg"
                height={300}
                width={300}
                style={{
                  filter:
                    "sepia(30%) saturate(150%) hue-rotate(20deg) brightness(90%)",
                  objectFit: "contain",
                }}
                alt="makeover-service"
                className="w-full h-full"
              />
            </div>
          </div>
        </Link>

        {/* Venue Card - Bottom right */}
        <Link
          href="/services/venue"
          className="bg-skin border-2 border-goldShade2 rounded-2xl p-4 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
        >
          <div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-2xl md:text-3xl font-medium leading-normal text-text-black">
                Venue
              </h3>
              <ChipIc
                label={"#Available"}
                className="bg-skin border-1 border-brown-60 px-2 py-1"
                size="sm"
                labelClassName="text-brown-60"
              />
            </div>
            <p className="text-sm-16 font-normal leading-normal text-grayShade2 mb-3">
              Find the perfect venue for your celebration, from intimate to
              grand.
            </p>
            <ButtonIC
              label="View Gallery"
              className={
                "border-2 px-4 py-2 gap-2 border-border-80 bg-brown-80 flex flex-row items-center"
              }
              labelStyle={"text-sm-16 leading-normal font-normal text-white"}
              icon={
                <Image
                  src="/images/icons/buttonIcons/arrow-right-icon.svg"
                  className="h-6 w-6"
                  height={26}
                  width={26}
                  alt={"arrow-icon"}
                />
              }
              iconPosition="end"
            />
          </div>
          <div className="flex justify-center mt-4">
            <div className="w-full max-w-[150px] h-[150px] md:max-w-[300px] md:h-[300px] flex items-center justify-center">
              <Image
                src="/Venue.svg"
                height={300}
                width={300}
                style={{
                  filter:
                    "sepia(30%) saturate(150%) hue-rotate(20deg) brightness(90%)",
                  objectFit: "contain",
                }}
                alt="venue-service"
                className="w-full h-full"
              />
            </div>
          </div>
        </Link>

        {/* Photography & Pre-Wedding Row */}
        <div className="md:col-span-3 flex flex-col md:flex-row gap-4">
          {/* Photography Card */}
          <Link
            href="/services/photography"
            className="flex-1 bg-skin border-2 border-goldShade2 rounded-2xl p-4 overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex flex-col h-full">
              <div className="mb-4">
                <p className="text-2xl md:text-3xl font-medium leading-normal text-text-black mb-3">
                  Photography & Videography
                </p>
                <p className="text-sm-16 font-normal leading-normal text-grayShade2 mb-3">
                  Capture every precious moment of your special day with our
                  professional photographers and stunning cinematic videography.
                </p>
                <ButtonIC
                  label="View Gallery"
                  className={
                    "border-2 px-4 py-2 gap-2 border-border-80 bg-brown-80 flex flex-row items-center"
                  }
                  labelStyle={
                    "text-sm-16 leading-normal font-normal text-white"
                  }
                  icon={
                    <Image
                      src="/images/icons/buttonIcons/arrow-right-icon.svg"
                      className="h-6 w-6"
                      height={26}
                      width={26}
                      alt={"arrow-icon"}
                    />
                  }
                  iconPosition="end"
                />
              </div>
              <div className="flex flex-row gap-3 mb-4">
                <ChipIc
                  label={"#Popular"}
                  className="bg-skin border-1 border-brown-60 px-2 py-1"
                  size="sm"
                  labelClassName="text-brown-60"
                />
                <ChipIc
                  label={"#Cinematic"}
                  className="bg-skin border-1 border-brown-60 px-2 py-1"
                  size="sm"
                  labelClassName="text-brown-60"
                />
              </div>
              <div className="flex-1 flex items-center justify-center min-h-[150px] md:min-h-[200px]">
                <Image
                  src={"/Photography and Videography.svg"}
                  className="object-contain"
                  height={180}
                  width={180}
                  style={{
                    filter:
                      "invert(26%) sepia(77%) saturate(500%) hue-rotate(1deg) brightness(85%) contrast(100%)",
                  }}
                  alt="photography-service"
                />
              </div>
            </div>
          </Link>

          {/* Pre-Wedding Card */}
          <Link
            href="/services/pre-wedding"
            className="flex-1 bg-skin border-2 border-goldShade2 rounded-2xl p-4 overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex flex-col h-full">
              <div className="mb-4">
                <p className="text-2xl md:text-3xl font-medium leading-normal text-text-black mb-3">
                  Pre-Wedding
                </p>
                <p className="text-sm-16 font-normal leading-normal text-grayShade2 mb-3">
                  Capture beautiful moments before the big day with stunning
                  pre-wedding photoshoots and cinematic videos.
                </p>
                <ButtonIC
                  label="View Gallery"
                  className={
                    "border-2 px-4 py-2 gap-2 border-border-80 bg-brown-80 flex flex-row items-center"
                  }
                  labelStyle={
                    "text-sm-16 leading-normal font-normal text-white"
                  }
                  icon={
                    <Image
                      src="/images/icons/buttonIcons/arrow-right-icon.svg"
                      className="h-6 w-6"
                      height={26}
                      width={26}
                      alt={"arrow-icon"}
                    />
                  }
                  iconPosition="end"
                />
              </div>
              <div className="flex flex-row gap-3 mb-4">
                <ChipIc
                  label={"#New"}
                  className="bg-skin border-1 border-brown-60 px-2 py-1"
                  size="sm"
                  labelClassName="text-brown-60"
                />
                <ChipIc
                  label={"#Romantic"}
                  className="bg-skin border-1 border-brown-60 px-2 py-1"
                  size="sm"
                  labelClassName="text-brown-60"
                />
              </div>
              <div className="flex-1 flex items-center justify-center min-h-[150px] md:min-h-[200px]">
                <Image
                  src={"/Creative Direction.svg"}
                  className="object-contain"
                  height={180}
                  width={180}
                  style={{
                    filter:
                      "invert(26%) sepia(77%) saturate(500%) hue-rotate(1deg) brightness(85%) contrast(100%)",
                  }}
                  alt="pre-wedding-service"
                />
              </div>
            </div>
          </Link>
        </div>
      </section>
    </section>
  );
};

export default Services;
