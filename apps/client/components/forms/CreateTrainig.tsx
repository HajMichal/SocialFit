import React from "react";
import { Input } from "../Input";
import { BookOpenText, CalendarDots, Tag } from "@phosphor-icons/react";
import { CalendarWeek } from "../calendar/CalendarWeek";
import { getWeekDates } from "../../utils/date";

export function CreateTrainigForm() {
  return (
    <div>
      <Input
        label="Training name"
        placeholder="Name your training..."
        Icon={Tag}
      />
      <Input
        label="Description"
        placeholder="E.g. set your goal, training type "
        optional
        Icon={BookOpenText}
      />
      <div className="flex justify-center gap-5">
        <CalendarWeek weekDates={getWeekDates(new Date())} />
      </div>
      <Input
        label="Training period"
        placeholder="Number of months"
        Icon={CalendarDots}
      />
    </div>
  );
}
