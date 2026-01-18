"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import ButtonIC from "../Buttons/ButtonIC";
import Image from "next/image";
import EnquiryModal from "@/components/EnquiryModal";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const servicesDropdownRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    {
      label: "Services",
      path: "/services",
      hasDropdown: true,
      subLinks: [
        { label: "Decor", path: "/services/decor" },
        { label: "Catering", path: "/services/catering" },
        { label: "Makeover", path: "/services/makeover" },
        { label: "Venue", path: "/services/venue" },
        { label: "Photography & Videography", path: "/services/photography" },
        { label: "Pre-Wedding", path: "/services/pre-wedding" },
      ],
    },
    {
      label: "About Us",
      path: "/about-us",
    },
    {
      label: "FAQ",
      path: "/faq",
    },
    {
      label: "Contact",
      path: "/contact",
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    if (isMobileServicesOpen) {
      setIsMobileServicesOpen(false);
    }
  };

  const toggleMobileServices = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMobileServicesOpen(!isMobileServicesOpen);
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isServicesOpen &&
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isServicesOpen]);

  return (
    <>
      {/* Desktop/Tablet Navbar */}
      <nav className="bg-white/10 w-[95%] backdrop-blur-md sticky top-4 z-50 border border-gray-300 rounded-full px-6 py-3 flex justify-between items-center mx-4 shadow-xl shadow-black/5 before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:to-transparent before:rounded-full before:pointer-events-none ">
        {/* Shimmer effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] animate-shimmer rounded-full"></div>

        {/* Logo Section */}
        <div className="flex items-center gap-2 relative z-10">
          <Image
            src={"/HaveitLogo.svg"}
            height={24}
            width={24}
            alt="Haveit Logo"
          />
          <span className="text-xl font-satoshi">Haveit</span>
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center gap-8 relative z-10">
          <div className="flex items-center gap-8">
            {navLinks.map((item, index) => (
              <div key={index} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    ref={item.hasDropdown ? servicesDropdownRef : null}
                  >
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="text-[#484848] font-satoshi text-[16px]  hover:text-gray-900 transition-all duration-300 hover:drop-shadow-sm font-normal flex items-center gap-1"
                    >
                      {item.label}
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isServicesOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {/* Dropdown Menu */}
                    {isServicesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/10 rounded-xl pointer-events-none"></div>
                        {item.subLinks.map((subLink, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subLink.path}
                            className="block px-4 py-3 text-[#484848] font-satoshi text-[14px] hover:text-gray-900 hover:bg-white/20 transition-all duration-200 relative z-10"
                          >
                            {subLink.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.path}
                    className="text-[#484848] font-satoshi text-[16px] hover:text-gray-900 transition-all duration-300 hover:drop-shadow-sm font-normal"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Action Button - Desktop */}
        <div className="hidden md:flex items-center gap-3 relative z-10">
          <ButtonIC
            label="Book Now !"
            className={"border-2 border-border-60 py-2 px-4 bg-skin"}
            labelStyle={" text-[16px]"}
            onClick={() => setIsEnquiryOpen(true)}
          />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden relative z-10">
          <button
            onClick={toggleMenu}
            className="text-[#737373] font-satoshi text-[16px] font-normal  hover:text-gray-900 p-2 transition-colors"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
          >
            Menu
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className={`
    fixed inset-0 z-50 md:hidden
    bg-white/30 backdrop-blur-sm
    transition-all duration-1000 ease-in-out
    ${
      isMenuOpen
        ? "opacity-100 pointer-events-auto scale-100"
        : "opacity-0 pointer-events-none scale-95"
    }
  `}
          onClick={toggleMenu}
        >
          <div
            className="bg-white/20 backdrop-blur-xl border border-white/20 rounded-2xl mx-4 mt-4 p-6 shadow-2xl relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Glass effect overlay for mobile menu */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/10 rounded-2xl pointer-events-none"></div>

            {/* Mobile Menu Header */}
            <div className="flex justify-between items-center mb-8 relative z-10">
              <div className="flex items-center gap-2">
                <Image
                  src={"/HaveitLogo.svg"}
                  className="h-6 w-6"
                  alt="Haveit Logo"
                  height={24}
                  width={24}
                />
                <span className="text-xl font-satoshi">Haveit</span>
              </div>

              <button
                onClick={toggleMenu}
                className="text-[#737373] font-satoshi text-[16px] hover:text-gray-800 transition-colors"
              >
                Close
              </button>
            </div>

            {/* Mobile Navigation Links */}
            <div className="flex flex-col gap-6 mb-8 relative z-10">
              <div className="flex flex-col items-center justify-center gap-4">
                {navLinks.map((item, index) => (
                  <div key={index} className="w-full text-center">
                    {item.hasDropdown ? (
                      <div>
                        <button
                          onClick={toggleMobileServices}
                          className="text-[#484848] font-satoshi text-[16px] hover:text-gray-900 transition-all duration-300 hover:drop-shadow-sm font-normal flex items-center justify-center gap-1 w-full"
                        >
                          {item.label}
                          <svg
                            className={`w-4 h-4 transition-transform duration-200 ${
                              isMobileServicesOpen ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>

                        {/* Mobile Dropdown */}
                        {isMobileServicesOpen && (
                          <div className="mt-3 flex flex-col gap-2">
                            {item.subLinks.map((subLink, subIndex) => (
                              <Link
                                key={subIndex}
                                href={subLink.path}
                                className="text-[#484848] font-satoshi text-[14px] hover:text-gray-900 transition-all duration-200 py-2 px-4 rounded-lg hover:bg-white/20"
                              >
                                {subLink.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.path}
                        className="text-[#484848] font-satoshi text-[16px] hover:text-gray-900 transition-all duration-300 hover:drop-shadow-sm font-normal"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Action Button */}
            <div className="flex flex-col gap-3 relative z-10">
              <ButtonIC
                label="Book Now !"
                className={"border-2 border-border-60 bg-skin py-1.5"}
                labelStyle={" text-[16px]"}
                onClick={() => {
                  setIsEnquiryOpen(true);
                  setIsMenuOpen(false);
                }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
      />
    </>
  );
};

export default Navbar;
