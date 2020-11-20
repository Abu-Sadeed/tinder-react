import React from "react";
import './App.css';
import Header from "./Header";
import TinderCard from "./TinderCards";
import SwipeButton from "./SwipeButtons";

function App() {
  return (
    <div className="app">
      <Header />
      <TinderCard />
      <SwipeButton/>
    </div>
  );
}

export default App;
