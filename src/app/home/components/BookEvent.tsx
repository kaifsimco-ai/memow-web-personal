"use client";
import React, { useState, useCallback } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { MdExpandMore } from "react-icons/md";
import { FormField } from "./Field";
import { FaGlobe } from "react-icons/fa6";
import { Calendar } from "./CustomCalendar";
import { TimeDropdown } from "./TimedropDown";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";

// Constants moved outside component for better performance

const formatDate = (date: Date): string => {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};

const BookEvent = () => {
  const [formData, setFormData] = useState({
    eventName: "",
    startAt: "",
    endAt: "",
    selectDate: "",
    guestCount: "",
    eventType: "",
    venuePreference: "",
    cityState: "",
    budget: "",
  });

  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 6)); // July 2025
  const [selectedDate, setSelectedDate] = useState(26); // Default to 26th
  const [showCalendar, setShowCalendar] = useState(false);
  const [showStartTime, setShowStartTime] = useState(false);
  const [showEndTime, setShowEndTime] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = useCallback((field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }, []);

  const handleSubmit = useCallback(async () => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/b2b-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          eventName: "",
          startAt: "",
          endAt: "",
          selectDate: "",
          guestCount: "",
          eventType: "",
          venuePreference: "",
          cityState: "",
          budget: "",
        });
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }, [formData]);

  const handleDateSelect = useCallback(
    (day: number) => {
      setSelectedDate(day);
      const selectedDateObj = new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth(),
        day,
      );
      handleInputChange("selectDate", formatDate(selectedDateObj));
    },
    [currentMonth, handleInputChange],
  );

  const handleMonthChange = useCallback((direction: number) => {
    setCurrentMonth(
      (prev) => new Date(prev.getFullYear(), prev.getMonth() + direction),
    );
  }, []);

  const closeCalendar = useCallback(() => setShowCalendar(false), []);

  return (
    <section className="flex flex-col justify-center items-center px-4 py-8">
      {/* Header Section */}
      <header className="flex flex-col gap-3.5 mb-8 text-center">
        <p className="text-gold-light font-medium text-md-32 leading-8">
          Business
        </p>
        <div>
          <p className="md:text-md-54 text-md-32 font-medium leading-normal md:leading-16 text-text-black">
            B2B Booking <br />
            for your event
          </p>
        </div>
        <p className="text-grayShade text-[14px] font-normal">
          NOTE: WE ONLY OFFER ORDERS{" "}
          <span className="text-grayShade2 font-normal">ABOVE 1 LAKH</span> /
          SERVICE
        </p>
      </header>

      {/* Form Section */}
      <section className="w-full max-w-2xl">
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          {/* Event Name */}
          <FormField icon="/images/icons/customIcons/buildings.svg">
            <Input
              type="text"
              placeholder="Event name"
              value={formData.eventName}
              onChange={(e) => handleInputChange("eventName", e.target.value)}
              className="pl-12 h-12 bg-gray-100 border-0 rounded-4xl placeholder:text-gray-500"
            />
          </FormField>

          {/* Start At and End At */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField icon="/images/icons/customIcons/clock.svg">
              <TimeDropdown
                value={formData.startAt}
                onValueChange={(value) => handleInputChange("startAt", value)}
                placeholder="Start with"
                isOpen={showStartTime}
                setIsOpen={setShowStartTime}
              />
            </FormField>

            <FormField icon="/images/icons/customIcons/clock.svg">
              <TimeDropdown
                value={formData.endAt}
                onValueChange={(value) => handleInputChange("endAt", value)}
                placeholder="End with"
                isOpen={showEndTime}
                setIsOpen={setShowEndTime}
              />
            </FormField>
          </div>

          {/* Select Date and Guest Count */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField icon="/images/icons/customIcons/calendar.svg">
              <Popover open={showCalendar} onOpenChange={setShowCalendar}>
                <PopoverTrigger asChild>
                  <button className="w-full h-12 bg-gray-100 border-0 rounded-4xl flex items-center justify-between px-12 text-left">
                    <span
                      className={
                        formData.selectDate ? "text-black" : "text-gray-500"
                      }
                    >
                      {formData.selectDate || "Select date"}
                    </span>
                    <MdExpandMore size={20} className="text-gray-400" />
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-80 p-4 bg-gray-50 rounded-lg z-50 shadow-lg">
                  <Calendar
                    currentMonth={currentMonth}
                    selectedDate={selectedDate}
                    onDateSelect={handleDateSelect}
                    onMonthChange={handleMonthChange}
                  />
                  <div className="flex gap-2">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={closeCalendar}
                      className="flex-1 rounded-4xl bg-gray-200 hover:bg-gray-300 text-gray-700 border-0"
                    >
                      Remove
                    </Button>
                    <Button
                      type="button"
                      onClick={closeCalendar}
                      className="flex-1 rounded-4xl bg-skin hover:bg-gold-light text-black"
                    >
                      Done
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </FormField>

            <FormField icon="/images/icons/customIcons/person.svg">
              <Input
                type="number"
                placeholder="Guest count"
                value={formData.guestCount}
                onChange={(e) =>
                  handleInputChange("guestCount", e.target.value)
                }
                className="pl-12 h-12 bg-gray-100 border-0 rounded-4xl placeholder:text-gray-500"
              />
            </FormField>
          </div>

          {/* Event Type and Venue Preference */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField icon="/images/icons/customIcons/sms.svg">
              <Select
                onValueChange={(value) => handleInputChange("eventType", value)}
              >
                <SelectTrigger className="pl-12 py-5 bg-gray-100 w-full rounded-4xl">
                  <SelectValue placeholder="Event type: FREE OR Paid" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="free">FREE</SelectItem>
                  <SelectItem value="paid">Paid</SelectItem>
                </SelectContent>
              </Select>
            </FormField>

            <FormField icon="/images/icons/customIcons/location.svg">
              <Input
                type="text"
                placeholder="Venue preference"
                value={formData.venuePreference}
                onChange={(e) =>
                  handleInputChange("venuePreference", e.target.value)
                }
                className="pl-12 h-12 bg-gray-100 border-0 rounded-4xl placeholder:text-gray-500"
              />
            </FormField>
          </div>

          {/* City/State and Budget */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              icon={<FaGlobe size={20} className="text-focusedIcon" />}
            >
              <Input
                type="text"
                placeholder="City / State"
                value={formData.cityState}
                onChange={(e) => handleInputChange("cityState", e.target.value)}
                className="pl-12 h-12 bg-gray-100 border-0 rounded-4xl placeholder:text-gray-500"
              />
            </FormField>

            <FormField icon="/images/icons/customIcons/money-4.svg">
              <Input
                type="text"
                placeholder="Budget in Lakh"
                value={formData.budget}
                onChange={(e) => handleInputChange("budget", e.target.value)}
                className="pl-12 h-12 bg-gray-100 border-0 rounded-4xl placeholder:text-gray-500"
              />
            </FormField>
          </div>

          {/* Submit Button */}
          <div className="pt-6">
            {submitStatus === "success" ? (
              <div className="w-full h-14 bg-green-100 text-green-700 font-medium rounded-4xl text-lg flex items-center justify-center gap-2">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Booking Submitted Successfully!
              </div>
            ) : submitStatus === "error" ? (
              <div className="space-y-2">
                <div className="text-red-500 text-sm text-center">
                  Something went wrong. Please try again.
                </div>
                <Button
                  type="button"
                  disabled={isSubmitting}
                  onClick={handleSubmit}
                  className="w-full h-14 bg-skin hover:bg-gold-light text-black font-medium rounded-4xl text-lg transition-colors"
                >
                  Try Again
                </Button>
              </div>
            ) : (
              <Button
                type="button"
                disabled={isSubmitting}
                onClick={handleSubmit}
                className="w-full h-14 bg-skin hover:bg-gold-light text-black font-medium rounded-4xl text-lg transition-colors disabled:opacity-70"
              >
                {isSubmitting ? "Submitting..." : "Book event"}
              </Button>
            )}
          </div>
        </form>
      </section>
    </section>
  );
};

export default BookEvent;
