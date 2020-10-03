import React from "react";
import "./App.css";
import Header from "./myComponents/Header";
import Todos from "./myComponents/Todos";

function App() {
  return (
    <div className="App">
      <Header />
      <Todos />
    </div>
  );
}

export default App;
