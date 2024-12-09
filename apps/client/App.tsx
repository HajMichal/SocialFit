import React from "react";
import { Route, Routes } from "react-router";
import TestRoute from "./pages/TestRoute";
import Home from "./pages/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<TestRoute />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
