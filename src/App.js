import React, { useState } from "react";
import "./App.css";
import { ReactComponent as Line } from "./images/pattern-divider-desktop.svg";
import { ReactComponent as Dice } from "./images/icon-dice.svg";

function App() {
  const [quote, setQuote] = useState(
    `You know you're in love when you can't fall asleep because reality is finally better than your dreams.`
  );
  const [adviceNumber, setAdviceNumber] = useState("10");

  const clickHandler = function () {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.slip.advice);
        setAdviceNumber(data.slip.id);
      });
  };

  return (
    <div className="box">
      <h3 className="a-number">
        Advice # <p className="id">{adviceNumber}</p>
      </h3>
      <p className="quote">{quote}</p>
      <Line className="line" />
      <Dice onClick={clickHandler} className="dice" />
      <div className="circle"></div>
    </div>
  );
}

export default App;
