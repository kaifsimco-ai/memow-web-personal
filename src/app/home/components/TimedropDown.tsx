import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React, {
  useCallback,
  useMemo,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import { MdExpandMore } from "react-icons/md";

const TIME_SLOTS = [
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
  "22:00",
  "22:30",
];

interface TimeDropdownProps {
  value: string;
  onValueChange: (value: string) => void;
  placeholder: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

interface PeriodButtonProps {
  period: "AM" | "PM";
}

// Optimized TimeDropdown component
export const TimeDropdown = React.memo(
  ({
    value,
    onValueChange,
    placeholder,
    isOpen,
    setIsOpen,
  }: TimeDropdownProps) => {
    const [selectedPeriod, setSelectedPeriod] = useState<"AM" | "PM">("AM");

    const timeSlotsByPeriod = useMemo(
      () => ({
        AM: TIME_SLOTS.filter((time) => parseInt(time.split(":")[0]) < 12),
        PM: TIME_SLOTS.filter((time) => parseInt(time.split(":")[0]) >= 12),
      }),
      []
    );

    const displayValue = useMemo(() => {
      if (!value) return placeholder;
      const hour = parseInt(value.split(":")[0]);
      return `${value} ${hour >= 12 ? "PM" : "AM"}`;
    }, [value, placeholder]);

    const handleTimeSelect = useCallback(
      (time: string) => {
        onValueChange(time);
        setIsOpen(false);
      },
      [onValueChange, setIsOpen]
    );

    const PeriodButton = ({ period }: PeriodButtonProps) => (
      <button
        onClick={() => setSelectedPeriod(period)}
        className={`py-2 px-4 rounded-full text-sm font-medium transition-all ${
          selectedPeriod === period
            ? "bg-skin text-black shadow-sm"
            : "bg-grayShade2 text-gray-400 font-light"
        }`}
      >
        {period}
      </button>
    );

    return (
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <button className="w-full pl-12 h-12 bg-gray-100 rounded-4xl focus:border-goldShade2 flex items-center justify-between px-4 text-left">
            <span className={value ? "text-black" : "text-gray-500"}>
              {displayValue}
            </span>
            <MdExpandMore size={20} className="text-gray-400" />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-72 p-0 bg-white rounded-2xl flex flex-row-reverse shadow-lg">
          <div className="flex px-4 py-3">
            <div className="flex flex-col space-y-2">
              <PeriodButton period="AM" />
              <PeriodButton period="PM" />
            </div>
          </div>
          <div className="p-4 overflow-y-auto max-h-48 w-full">
            <div className="grid grid-cols-1 gap-1">
              {timeSlotsByPeriod[selectedPeriod].map((time) => (
                <button
                  key={time}
                  onClick={() => handleTimeSelect(time)}
                  className={`w-full text-left px-3 py-2.5 rounded-4xl text-sm transition-all ${
                    value === time
                      ? "bg-skin text-black font-medium shadow-sm"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </PopoverContent>
      </Popover>
    );
  }
);

TimeDropdown.displayName = "TimeDropdown";
