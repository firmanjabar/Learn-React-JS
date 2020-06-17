import React from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Counters />
      </main>
    </>
  );
}

export default App;
