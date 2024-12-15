import React from "react";
import styled from "styled-components";
import { ContentHeader, ShortDescription } from "./styled/Text";
import { Dumbbell } from "lucide-react";
import { Exercises } from "@server/db/schema";
import { LongTile, LongTileContent, LongTileDetail } from "./styled/Tiles";

export function ExerciseTile({ exercise }: { exercise: Exercises }) {
  return (
    <LongTile key={exercise.id}>
      <LongTileContent>
        <div className="rounded-full bg-brand p-2">
          <Dumbbell className="text-white" size={26} />
        </div>
        <div className="ml-3">
          <ContentHeader>{exercise.name}</ContentHeader>
          <ShortDescription>{exercise.reps.join(", ")}</ShortDescription>
        </div>
      </LongTileContent>
      <LongTileDetail>{exercise.kilograms} kg</LongTileDetail>
    </LongTile>
  );
}
