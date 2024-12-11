import type { Exercises } from "@server/db/schema";
import React from "react";
import { trpc } from "../api/trpc";
import { Header } from "./styled/Text";
import { ExerciseTile } from "./ExerciseTile";

interface ExercisesType {
  choosedTrainingDay: string;
}
export function Exercises({ choosedTrainingDay }: ExercisesType) {
  const { data: exercises } =
    trpc.example.exercises.useQuery(choosedTrainingDay);

  return (
    <div className="w-full">
      <Header>Exercises</Header>

      <div className="w-full flex flex-col items-center gap-2">
        {exercises?.map((exercise) => (
          <ExerciseTile key={exercise.id} exercise={exercise} />
        ))}
      </div>
    </div>
  );
}
