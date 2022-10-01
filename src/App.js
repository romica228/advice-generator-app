import "./App.css";
import { ReactComponent as Line } from "./images/pattern-divider-desktop.svg";
import { ReactComponent as Dice } from "./images/icon-dice.svg";

function App() {
  return (
    <div className="box">
      <h3 className="a-number">Advice #117</h3>
      <p className="quote">
        “It is easy to sit and take notice, what's difficult is getting up and
        taking action.”
      </p>
      <Line className="line" />
      <Dice className="dice" />
      <div className="circle"></div>
    </div>
  );
}

export default App;
