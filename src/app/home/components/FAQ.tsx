import FaqAccordion from "@/components/Global/Accordian";
import React from "react";

const FAQ = () => {
  const dummyFaqs = [
    {
      question: "What is Haveit?",
      answer:
        "Haveit is an AI service provider connecting clients (event planners) with decor, catering, makeover, and venue services.",
    },
    {
      question: "Can I customize my pre-booking package?",
      answer:
        "Yes, you can customize your package during checkout or by contacting support.",
    },
    {
      question: "How do I access and verify my booked event?",
      answer:
        'You can log in to your dashboard and access event details under "My Events".',
    },
  ];
  return (
    <section className="flex flex-col justify-center items-center mb-4">
      <div className="flex flex-col items-center gap-3.5">
        <h3 className="text-center text-gold-light text-md-24 font-medium leading-8">
          FAQ
        </h3>
        <h1 className="text-center text-text-black text-md-54 font-medium leading-16 ">
          Questions about booking an <br /> event with{" "}
          <span className="text-gold-light font-medium leading-16 text-md-54">
            Haveit
          </span>
        </h1>
        <p className="text-center text-grayShade2 text-sm-16 font-normal leading-normal max-w-md break-words">
          EVERYONE PLANNING AN EVENT ASKS THIS QUESTIONS AND THIS IS THE BEST
          WAY TO HANDLE IT.
        </p>
      </div>
      <div className=" mt-3">
        <FaqAccordion data={dummyFaqs} />
      </div>
    </section>
  );
};

export default FAQ;
