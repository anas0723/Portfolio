import React from "react";
import "./index.css";
import Body from "./components/Body.jsx";
import Header from "./components/Header.jsx";
import Cursor from "./components/Cursor.jsx";
import MainCursor from "./components/MainCursor.jsx";

export default function App() {
  return (
    <div className="relative">
      <Cursor />
      <MainCursor />
      <Header />
      <Body />
    </div>
  );
}
