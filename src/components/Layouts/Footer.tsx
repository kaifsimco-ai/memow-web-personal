import Image from "next/image";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AiFillInstagram, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { Input } from "../ui/input";

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

const Footer = () => {
  return (
    <footer className=" bg-white p-4">
      {/* Logo Section */}
      <section className="flex flex-row items-center gap-1.5 my-4">
        <Image
          src="/HaveitLogo.svg"
          className="h-6 w-6 aspect-square"
          height={24}
          width={24}
          alt="Haveit Logo"
        />
        <span className="text-xl md:text-xl text-black font-medium leading-none">
          Haveit
        </span>
      </section>

      {/* Main Content Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {/* Navigation Links Section */}
        <div className="space-y-4">
          <h3 className="text-sm-16 font-normal text-text-black leading-none  mb-4">
            Quick Links
          </h3>
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link, index) => (
              <div key={index}>
                {link.hasDropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="flex flex-row justify-center items-center  text-gray-600 hover:text-black font-normal text-left">
                        {link.label}
                        <ChevronDown className="ml-1 h-3 w-3" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-48">
                      {link.subLinks?.map((subLink, subIndex) => (
                        <DropdownMenuItem key={subIndex} asChild>
                          <a href={subLink.path} className="cursor-pointer">
                            {subLink.label}
                          </a>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <a
                    href={link.path}
                    className="text-gray-600 hover:text-black transition-colors duration-200 font-normal block"
                  >
                    {link.label}
                  </a>
                )}
              </div>
            ))}
          </nav>
        </div>

        {/* Contact Information Section */}
        <div className="">
          <h3 className="text-sm-16 font-normal text-text-black leading-none mb-4">
            Contact
          </h3>
          <div className="flex flex-col space-y-3 text-sm">
            <div className="flex flex-row items-start space-x-2">
              <span className="text-gray-500">
                <Image
                  src="/images/icons/customIcons/location.svg"
                  className="h-5 w-5"
                  height={20}
                  width={20}
                  alt="Location icon"
                />
              </span>
              <span className="text-gray-600 leading-relaxed">
                Kalyanpur Road, South 24 parganas, Baruipur,
                <br />
                West Bengal India, 700144
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-500">
                <Image
                  src="/images/icons/customIcons/sms.svg"
                  className="h-5 w-5"
                  height={20}
                  width={20}
                  alt="Email icon"
                />
              </span>
              <a
                href="mailto:memow@memowry.com"
                className="text-gray-600 hover:text-black transition-colors duration-200"
              >
                memow@memowry.com
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-500">
                <Image
                  src="/images/icons/customIcons/call.svg"
                  className="h-5 w-5"
                  height={20}
                  width={20}
                  alt="Phone icon"
                />
              </span>
              <a
                href="tel:+919876544964"
                className="text-gray-600 hover:text-black transition-colors duration-200"
              >
                +91 9876544964
              </a>
            </div>
          </div>
        </div>

        {/* Social Media Links Section */}
        <div className="space-y-4">
          <h3 className="text-sm-16 font-normal text-text-black leading-none mb-4">
            Socials
          </h3>
          <div className="flex flex-col space-y-3">
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center space-x-2"
            >
              <span>
                <AiFillLinkedin color="#7B692B" size={20} />
              </span>
              <span>LinkedIn</span>
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-pink-600 transition-colors duration-200 flex items-center space-x-2"
            >
              <span>
                <AiFillInstagram color="#7B692B" size={20} />
              </span>
              <span>Instagram</span>
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-red-600 transition-colors duration-200 flex items-center space-x-2"
            >
              <span>
                <AiFillYoutube color="#7B692B" size={20} />
              </span>
              <span>Youtube</span>
            </a>
          </div>
        </div>

        {/* Newsletter Subscription Section */}
        <div className="space-y-4">
          <h3 className="text-sm-16 font-normal text-text-black leading-none mb-4">
            Subscribe
          </h3>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            Subscribe to get the first dibs on new updates, features and
            announcement of Haveit.
          </p>
          <form className="mt-4">
            <div className="relative flex flex-row gap-3">
              <Image
                src="/images/icons/customIcons/location.svg"
                className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
                height={20}
                width={20}
                alt="Email icon"
              />
              <Input
                id="newsletter-email"
                type="email"
                //   value={email}
                //   onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="pl-10 py-3 rounded-4xl  focus:border-goldShade2 focus:ring-2
                                 focus:ring-goldShade2 focus:ring-opacity-20 transition-all duration-200"
                // aria-describedby={
                //     error
                //         ? "newsletter-error"
                //         : success
                //             ? "newsletter-success"
                //             : undefined
                // }
                required
                autoComplete="email"
                //   disabled={loading}
              />
              <Button
                type="submit"
                className=" py-3 bg-gold text-text-black font-normal text-sm-16 rounded-4xl hover:bg-gold-light transition"
                //   disabled={loading}
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Separator */}
      <Separator className="my-8" />

      {/* Bottom Section with Logo and Legal Links */}
      <section className="flex flex-col justify-center items-center">
        <Image src={"/Logo_xl.svg"} height={454} width={454} alt="Logo" />
        <span className="text-grayShade4 text-sm tracking-widest font-medium mt-2 mb-4">
          MEMOW PRIVATE LIMITED
        </span>
        <div className="px-2 w-full flex flex-col md:flex-row md:justify-between items-center gap-4 md:gap-0">
          <span className="text-grayShade4 text-[14px] leading-normal font-normal">
            © Haveit / ALL RIGHTS RESERVED
          </span>
          <span className="text-grayShade4 text-[14px] leading-normal font-normal">
            PRIVACY POLICY
          </span>
          <span className="text-grayShade4 text-[14px] leading-normal font-normal">
            TERM & CONDITIONS
          </span>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
