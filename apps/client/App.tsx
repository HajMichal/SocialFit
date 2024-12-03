import React from "react";
import { Route, Routes } from "react-router";
import TestRoute from "./pages/TestRoute";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<TestRoute />} />
    </Routes>
  );
}
