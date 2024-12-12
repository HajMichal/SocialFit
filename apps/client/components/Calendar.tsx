import { ChevronDown } from "lucide-react";
import React from "react";
import styled from "styled-components";
import { SmallText } from "./styled/Text";

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export function Calendar() {
  return (
    <CenterContent>
      <CalendarContainer>
        <div className="flex w-full justify-between items-center px-4 mt-2">
          <SmallText>Scheduled training days</SmallText>
          <ChooseMonth>
            November <ChevronDown size={22} color="#212121" />
          </ChooseMonth>
        </div>
        <div className="h-24"></div>
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
