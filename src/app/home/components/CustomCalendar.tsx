import React, { useMemo } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const DAY_LETTERS = ["M", "T", "W", "T", "F", "S", "S"];

const getDaysInMonth = (date: Date) =>
  new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
const getFirstDayOfMonth = (date: Date) =>
  new Date(date.getFullYear(), date.getMonth(), 1).getDay();

interface CalendarProps {
  currentMonth: Date;
  selectedDate: number;
  onDateSelect: (day: number) => void;
  onMonthChange: (direction: number) => void;
}

// Optimized Calendar component
export const Calendar = React.memo(
  ({
    currentMonth,
    selectedDate,
    onDateSelect,
    onMonthChange,
  }: CalendarProps) => {
    const calendarDays = useMemo(() => {
      const daysInMonth = getDaysInMonth(currentMonth);
      const firstDay = getFirstDayOfMonth(currentMonth);
      const days = [];

      // Empty cells for days before the first day of the month
      for (let i = 0; i < firstDay; i++) {
        days.push(<div key={`empty-${i}`} className="w-8 h-8" />);
      }

      // Days of the month
      for (let day = 1; day <= daysInMonth; day++) {
        days.push(
          <button
            key={day}
            onClick={() => onDateSelect(day)}
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
              day === selectedDate
                ? "bg-yellow-400 text-black"
                : "hover:bg-gray-100 text-gray-700"
            }`}
          >
            {day}
          </button>
        );
      }
      return days;
    }, [currentMonth, selectedDate, onDateSelect]);

    return (
      <>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-gray-800">
            {MONTH_NAMES[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </h3>
          <div className="flex gap-1">
            <button
              type="button"
              onClick={() => onMonthChange(-1)}
              className="p-1 hover:bg-gray-200 rounded-4xl transition-colors"
            >
              <MdKeyboardArrowLeft size={20} />
            </button>
            <button
              type="button"
              onClick={() => onMonthChange(1)}
              className="p-1 hover:bg-gray-200 rounded-4xl transition-colors"
            >
              <MdKeyboardArrowRight size={20} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-1 mb-2">
          {DAY_LETTERS.map((day, index) => (
            <div
              key={`${day}-${index}`}
              className="w-8 h-8 flex items-center justify-center text-sm font-medium text-gray-600"
            >
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1 mb-4">{calendarDays}</div>
      </>
    );
  }
);

Calendar.displayName = "Calendar";
