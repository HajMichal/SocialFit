import type { Exercises } from "@server/db/schema";
import React from "react";
import { trpc } from "../api/trpc";
import { Header } from "../pages/Home";

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
    </div>
  );
}
