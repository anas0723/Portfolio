import React from "react";
import "./index.css";
import Body from "./components/Body.jsx";
import Header from "./components/Header.jsx";
import MetaBalls from "./components/MetaBalls.jsx";
import Source from "./components/Source.jsx";


export default function App() {
  return (
    <>
      <Header />
      <Body />
      
      <MetaBalls />
      <Source />
    </>
  );
}
