"use client";

import React, { useRef, useState, useLayoutEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  data: FaqItem[];
}

const FaqAccordion: React.FC<FaqAccordionProps> = ({ data }) => (
  <div className="space-y-4 max-w-md mx-auto p-6 bg-gray-50 rounded-2xl">
    {data.map((item, i) => (
      <AccordionItem key={i} {...item} />
    ))}
  </div>
);

const AccordionItem: React.FC<FaqItem> = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  const bubbleRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  // Initialize bubble position
  useLayoutEffect(() => {
    if (bubbleRef.current) {
      gsap.set(bubbleRef.current, {
        y: 20,
        opacity: 0,
        scale: 0.8,
        transformOrigin: "top right",
      });
    }
  }, []);

  const toggle = () => {
    if (isAnimating) return;

    setIsAnimating(true);

    if (open) {
      // Close animation - slide up and fade out
      const tl = gsap.timeline();
      tl.to(bubbleRef.current, {
        y: -15,
        opacity: 0,
        scale: 0.95,
        duration: 0.2,
        ease: "power2.in",
        onComplete: () => {
          setOpen(false);
          setIsAnimating(false);
        },
      });
    } else {
      // Open animation - chat bubble appearing with spring effect
      setOpen(true);

      requestAnimationFrame(() => {
        const tl = gsap.timeline();
        tl.set(bubbleRef.current, {
          y: 15,
          opacity: 0,
          scale: 0.8,
          transformOrigin: "top right",
        }).to(bubbleRef.current, {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)", // Spring effect
          onComplete: () => setIsAnimating(false),
        });
      });
    }
  };

  return (
    <div className="space-y-3">
      {/* Question Bubble - Left aligned */}
      <div className="flex justify-start">
        <div className="flex items-center gap-2 flex-row  w-full justify-between">
          <div
            onClick={toggle}
            className="bg-skin text-black px-4 py-3 rounded-2xl rounded-tl-md w-full cursor-pointer hover:bg-[#fde68a] transition-colors duration-200 shadow-sm"
          >
            <p className="text-sm font-medium">{question}</p>
          </div>
          <div className="  items-center flex flex-row justify-center  ">
            <button
              onClick={toggle}
              disabled={isAnimating}
              className="text-black hover:scale-110 transition-transform duration-200"
            >
              {open ? (
                <Image
                  src="/images/icons/customIcons/minus-cirlce.svg"
                  className="h-6 w-6"
                  height={24}
                  width={24}
                  alt="Collapse"
                />
              ) : (
                <Image
                  src="/images/icons/customIcons/add-circle.svg"
                  className="h-6 w-6"
                  height={24}
                  width={24}
                  alt="Expand"
                />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Answer Bubble - Right aligned */}
      {open && (
        <div className="flex justify-end">
          <div
            ref={bubbleRef}
            className="bg-goldShade2 text-black px-4 py-3 rounded-2xl rounded-tr-md max-w-xs shadow-md"
          >
            <p className="text-sm leading-relaxed break-words">{answer}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FaqAccordion;
