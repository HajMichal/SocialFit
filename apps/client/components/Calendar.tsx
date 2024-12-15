import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ContentHeader, ShortDescription, SmallText } from "./styled/Text";
import {
  formatDate,
  formatMonth,
  formatWeekDay,
  getWeekDates,
} from "../utils/date";
import * as Select from "@radix-ui/react-select";
import { AnimatePresence, motion } from "framer-motion";
import { CenterContent } from "./styled/Containers";

const MONTHS = [
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

// Mocked query output
export async function fetchTrainingDays(start: Date, end: Date) {
  return [new Date("2024-12-12"), new Date("2024-11-15")];
}

export function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [choosedMonth, setMonth] = useState(formatMonth(currentDate));
  const [weekDates, setWeekDates] = useState<Date[]>([]);
  const [trainingDays, setTrainingDays] = useState<Date[]>([]);
  const [slideDirection, setSlideDirection] = useState<"left" | "right">(
    "right"
  );

  useEffect(() => {
    const dates = getWeekDates(currentDate);
    setWeekDates(dates);

    // Fetch training days for the current week
    const start = dates[0];
    const end = dates[dates.length - 1];
    fetchTrainingDays(start, end).then(setTrainingDays);
  }, [currentDate]);

  const navigateWeek = (direction: "prev" | "next") => {
    const newDate = new Date(currentDate);
    if (direction === "prev") {
      newDate.setDate(newDate.getDate() - 7);
      setSlideDirection("left");
    } else {
      newDate.setDate(newDate.getDate() + 7);
      setSlideDirection("right");
    }
    setCurrentDate(newDate);
  };

  const navigateMonth = (value: string) => {
    setMonth(value);
    const newDate = new Date(currentDate);
    newDate.setMonth(MONTHS.indexOf(value));
    setCurrentDate(newDate);
  };

  const isTrainingDay = (date: Date) => {
    return trainingDays.some(
      (trainingDate) => trainingDate.toDateString() === date.toDateString()
    );
  };

  return (
    <CenterContent>
      <CalendarContainer>
        <div className="flex items-center justify-between mb-6">
          <ContentHeader>Scheduled training days</ContentHeader>

          <Select.Root value={choosedMonth} onValueChange={navigateMonth}>
            <Select.Trigger>
              <ChooseMonth>
                <Select.Value>{choosedMonth}</Select.Value>{" "}
                <ChevronDown size={22} color="#212121" />
              </ChooseMonth>
            </Select.Trigger>
            <Select.Portal>
              <Select.Content position="popper" className="h-full bg-white">
                <Select.Viewport className="p-3">
                  {MONTHS.filter((month) => choosedMonth !== month).map(
                    (month) => {
                      return (
                        <Select.Item
                          key={month}
                          value={month}
                          className="my-1 p-1 rounded-lg"
                        >
                          {month}
                        </Select.Item>
                      );
                    }
                  )}
                </Select.Viewport>
              </Select.Content>
            </Select.Portal>
          </Select.Root>
        </div>

        <div className="relative">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={currentDate.toISOString()}
              initial={{
                x: slideDirection === "right" ? 200 : -200,
                opacity: 0,
              }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: slideDirection === "right" ? -200 : 200, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="grid grid-cols-7"
            >
              {weekDates.map((date, index) => (
                <div
                  key={date.toISOString()}
                  className="flex flex-col items-center"
                >
                  <ShortDescription>{formatWeekDay(date)}</ShortDescription>
                  <SmallText
                    className={
                      isTrainingDay(date)
                        ? "border-b-[3px] border-brand pb-1"
                        : "pb-[7px]"
                    }
                  >
                    {formatDate(date)}
                  </SmallText>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          <button
            className="absolute -left-1 top-1/2 -translate-y-1/2 -translate-x-2"
            onClick={() => navigateWeek("prev")}
          >
            <ChevronLeft className="h-4 w-4 text-grey" />
          </button>

          <button
            className="absolute -right-1 top-1/2 -translate-y-1/2 translate-x-2"
            onClick={() => navigateWeek("next")}
          >
            <ChevronRight className="h-4 w-4 text-grey" />
          </button>
        </div>
      </CalendarContainer>
    </CenterContent>
  );
}

const CalendarContainer = styled.div`
  width: 90%;
  background-color: white;
  box-shadow: 0px 4px 4px 0px #d7d7d7;
  border-radius: 15px;
  padding: 10px;
`;

const ChooseMonth = styled.div`
  padding: 1px 7px 1px 10px;
  display: flex;
  justify-content: space-between;
  border: 2px solid #212121;
  border-radius: 15px;
  font-size: 12px;
  align-items: center;
  width: 120px;
  font-weight: 600;
`;
