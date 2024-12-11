import React from "react";
import styled from "styled-components";
import { ContentHeader, ShortDescription } from "./styled/Text";
import { Dumbbell } from "lucide-react";
import { Exercises } from "@server/db/schema";

export function ExerciseTile({ exercise }: { exercise: Exercises }) {
  return (
    <LongTile key={exercise.id}>
      <div className="flex items-center  my-3">
        <div className="rounded-full bg-brand p-2">
          <Dumbbell className="text-white" size={26} />
        </div>
        <div className="ml-3">
          <ContentHeader>{exercise.name}</ContentHeader>
          <ShortDescription>{exercise.reps.join(", ")}</ShortDescription>
        </div>
      </div>
      <LongTileDetail>{exercise.kilograms} kg</LongTileDetail>
    </LongTile>
  );
}

const LongTileDetail = styled.div`
  border-left: 0.8px solid #aaadb0;
  padding-left: 16px;
  height: auto;
  display: flex;
  align-items: center;
  font-weight: 600;
  font-family: "Montserrat";
  font-size: 12px;
  white-space: nowrap;
`;

const LongTile = styled.div`
  width: 90%;
  background-color: white;
  box-shadow: 0px 4px 4px 0px #d7d7d7;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  padding: 0 10px 0 10px;
`;
