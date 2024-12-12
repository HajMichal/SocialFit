import { Dumbbell } from "lucide-react";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { trpc } from "../api/trpc";

import { Exercises } from "../components/Exercises";
import { ContentHeader, Header, NameHeader } from "../components/styled/Text";
import { Navbar } from "../components/Navbar";
import { Calendar } from "../components/Calendar";

function Home() {
  const [choosedTrainingDay, setTrainingDay] = useState<string | undefined>();

  const { data: user, isFetched } = trpc.example.users.useQuery();

  useEffect(() => {
    if (isFetched) setTrainingDay(user?.trainings[0].trainingDay[0].id);
  }, [isFetched]);

  return (
    <div className="bg-background min-h-screen">
      <NameHeader>Hello {user?.name}!</NameHeader>
      <Calendar />
      <div className="w-full">
        <Header>Next trainings</Header>
        <div className="overflow-x-auto px-0.5 py-3 whitespace-nowrap gap-7">
          {user?.trainings[0].trainingDay.map((trainingDay) => {
            return (
              <TrainingTile
                key={trainingDay.id}
                onClick={() => setTrainingDay(trainingDay.id)}
              >
                <Dumbbell />
                <ContentHeader>{trainingDay.name}</ContentHeader>
              </TrainingTile>
            );
          })}
        </div>
      </div>
      {isFetched && choosedTrainingDay && (
        <Exercises choosedTrainingDay={choosedTrainingDay} />
      )}

      <Navbar />
    </div>
  );
}
export default Home;
const Test = styled.h1`
  font-weight: 700;
`;
const TrainingTile = styled.div`
  display: inline-block;
  width: 33%;
  max-width: 150px;
  height: 5rem;
  border-radius: 15px;
  box-shadow: 0px 4px 6px 0px #d7d7d7;
  margin-right: 13px;
  margin-left: 13px;
  padding: 10px;
  &:hover {
    border: solid #02cf8a 2px;
    padding: 8px;
  }
  &:focus {
    border: solid #02cf8a 2px;
    padding: 8px;
  }
`;
