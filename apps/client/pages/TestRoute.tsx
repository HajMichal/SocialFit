import React from "react";
import { trpc } from "../api/trpc";

export default function TestRoute() {
  const { data } = trpc.example.test.useQuery();
  const { data: users } = trpc.example.users.useQuery();
  console.log(data);
  console.log(users);
  return <div className="min-w-full min-h-screen bg-[#F9F9F9]">TestRoute</div>;
}
