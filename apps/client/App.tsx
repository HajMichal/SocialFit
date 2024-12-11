import React from "react";
import { Route, Routes } from "react-router";
import TestRoute from "./pages/TestRoute";
import Home from "./pages/Home";
import Friends from "./pages/Friends";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<TestRoute />} />
      <Route path="/home" element={<Home />} />
      <Route path="/friends" element={<Friends />} />
    </Routes>
  );
}
