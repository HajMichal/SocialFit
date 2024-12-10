import type { Exercises } from "@server/db/schema";
import React from "react";
import { trpc } from "../api/trpc";
import styled from "styled-components";
import { ContentHeader, Header, ShortDescription } from "./styled/Text";
import { Dumbbell } from "lucide-react";

interface ExercisesType {
  choosedTrainingDay: string;
}
export function Exercises({ choosedTrainingDay }: ExercisesType) {
  const { data: exercises, isFetched } =
    trpc.example.exercises.useQuery(choosedTrainingDay);
  console.log({ choosedTrainingDay });
  console.log(exercises);
  return (
    <div className="w-full">
      <Header>Exercises</Header>

      <div className="w-full flex flex-col items-center gap-2">
        {exercises?.map((exercise) => (
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
        ))}
      </div>
    </div>
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
