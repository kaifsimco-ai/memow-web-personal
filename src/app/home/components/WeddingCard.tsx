import ButtonIC from "@/components/Buttons/ButtonIC";
import Image from "next/image";
import React from "react";

const WeddingCard = () => {
  return (
    <div className="relative flex flex-col justify-center items-center h-[180px] w-[150px] sm:h-[220px] sm:w-[180px] md:h-[280px] md:w-[240px] lg:h-[364px] lg:w-[344px] overflow-hidden rounded-2xl">
      {/* Using next/image for better performance */}
      <Image
        alt="wedding-couple"
        src={"/images/homepage/wedding_couple_home.jpg"}
        layout="fill"
        objectFit="cover"
        className="absolute inset-0"
      />

      <div className="flex flex-row justify-between items-center p-2 absolute bottom-2 sm:bottom-3 md:bottom-4 bg-white rounded-[10px] w-[90%] mx-auto">
        <div className="flex flex-col flex-1 mr-2 min-w-0">
          {" "}
          {/* Added min-w-0 to prevent text overflow */}
          <span className="font-medium text-xs sm:text-sm md:text-base leading-tight">
            Shaadi (Wedding)
          </span>
          <p className="text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs leading-tight text-grayShade2 line-clamp-2">
            {" "}
            {/* Added line-clamp-2 */}
            One of the grandest family events. Includes rituals like Mehendi,
            Sangeet and Haldi.
          </p>
        </div>
        <div className="flex-shrink-0">
          <ButtonIC
            label="Book Now"
            className="border-2 px-1 border-border-60 bg-skin h-6 sm:h-7 md:h-8 text-[10px] sm:text-xs md:text-sm"
            labelStyle="whitespace-nowrap text-[12px]"
          />
        </div>
      </div>
    </div>
  );
};

export default WeddingCard;
