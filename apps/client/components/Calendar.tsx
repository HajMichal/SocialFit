import {
  CheckIcon,
  ChevronDown,
  ChevronDownIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
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

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export async function fetchTrainingDays(start: Date, end: Date) {
  // This is where you'd implement your actual backend fetching logic
  // For now, we'll return some mock data
  return [
    new Date("2024-12-12"),
    new Date("2024-11-15"),
    // Add more dates as needed
  ];
}

export function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
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

  const isTrainingDay = (date: Date) => {
    return trainingDays.some(
      (trainingDate) => trainingDate.toDateString() === date.toDateString()
    );
  };

  return (
    // <CenterContent>
    //   <CalendarContainer>
    //     <div className="flex w-full justify-between items-center px-4 mt-2">
    //       <SmallText>Scheduled training days</SmallText>
    //       <ChooseMonth>
    //         November <ChevronDown size={22} color="#212121" />
    //       </ChooseMonth>
    //     </div>
    //     <div className="h-40 w-full">
    //       <Select.Root
    //         value={formatMonth(currentDate)}
    //         onValueChange={() => {}}
    //       >
    //         <Select.Trigger className="inline-flex items-center justify-center rounded px-[15px] text-[13px] leading-none h-[35px] gap-[5px] bg-white text-violet11 shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-violet9 outline-none">
    //           <Select.Value>{formatMonth(currentDate)}</Select.Value>
    //           <Select.Icon className="text-violet11">
    //             <ChevronDownIcon />
    //           </Select.Icon>
    //         </Select.Trigger>
    //         <Select.Portal>
    //           <Select.Content className="overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
    //             <Select.Viewport className="p-[5px]">
    //               <Select.Item
    //                 value={formatMonth(currentDate)}
    //                 className="text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1"
    //               >
    //                 <Select.ItemText>
    //                   {formatMonth(currentDate)}
    //                 </Select.ItemText>
    //                 <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
    //                   <CheckIcon />
    //                 </Select.ItemIndicator>
    //               </Select.Item>
    //             </Select.Viewport>
    //           </Select.Content>
    //         </Select.Portal>
    //       </Select.Root>
    //     </div>
    //   </CalendarContainer>
    // </CenterContent>
    <CenterContent>
      <CalendarContainer>
        <div className="flex items-center justify-between mb-6">
          <ContentHeader>Scheduled training days</ContentHeader>
          <Select.Root
            value={formatMonth(currentDate)}
            onValueChange={() => {}}
          >
            <Select.Trigger>
              <ChooseMonth>
                <Select.Value>{formatMonth(currentDate)}</Select.Value>{" "}
                <ChevronDown size={22} color="#212121" />
              </ChooseMonth>
            </Select.Trigger>
            <Select.Portal>
              <Select.Content>
                <Select.Viewport className="p-[5px]">
                  {/* <Select.Item
                    value={formatMonth(currentDate)}
                    className="text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1"
                  >
                    <Select.ItemText>
                      {formatMonth(currentDate)}
                    </Select.ItemText>
                    <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center">
                      <CheckIcon />
                    </Select.ItemIndicator>
                  </Select.Item> */}
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

export const CenterContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
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
