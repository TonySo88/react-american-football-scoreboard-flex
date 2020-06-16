//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import BottomRow from "./BottomRow";
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homescore, setHomescore] = useState(0);
  const [awayscore, setAwayscore] = useState(0);
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Bears</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{homescore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Packers</h2>
            <div className="away__score">{awayscore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={()=>{
            setHomescore(homescore + 6)
          }} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={()=> {
            setHomescore(homescore + 3)
          }} className="homeButtons__fieldGoal">Home Field Goal</button>
          <button onClick={()=>{
            setHomescore(homescore + 1)
          }} className="homeButtons_pointAfter">Home Point After</button>
          <button onClick={()=>{
            setHomescore(homescore + 2)
          }} className="homeButtons_twoPointConversion">Home 2 Point Conversion</button>
          <button onClick={()=>{
            setHomescore(homescore + 2)
          }} className="homeButtons_safety">Safety</button>
        </div>
        <div className="awayButtons">
          <button onClick={()=>{
            setAwayscore(awayscore + 6)
          }} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={()=>{
            setAwayscore(awayscore + 3)
          }} className="awayButtons__fieldGoal">Away Field Goal</button>
          <button onClick = {()=>{
            setAwayscore(awayscore + 1)
          }} className="awayButtons_pointAfter">Away Point After</button>
          <button onClick = {()=>{
            setAwayscore(awayscore + 2)
          }} className="awayButtons_twoPointConversion">Away 2 Point Conversion</button>
          <button onClick={()=>{
            setAwayscore(awayscore + 2)
          }} className="awayButtons_safety">Safety</button>
        </div>
      </section>
    </div>
  );
}

export default App;
