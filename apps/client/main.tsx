import React from "react";
import ReactDOM from "react-dom/client";
import { TrpcProvider } from "./TrpcProvider";
import { trpc } from "./api/trpc";

const App = () => {
  const { data } = trpc.example.test.useQuery();
  console.log(data);
  return (
    <div>
      <h1>{data?.Hello ?? "Loading..."}</h1>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <TrpcProvider>
    <App />
  </TrpcProvider>
);
