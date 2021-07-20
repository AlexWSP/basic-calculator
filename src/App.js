import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [res, setRes] = useState("");
  const [operator, setOperator] = useState("");
  const [left, setLeft] = useState("");
  const [right, setRight] = useState("");
  const operators = ['+', '-', '*', '/'];

  const handleClick = (e) => {
    setRes(res.concat(e.target.name));
    if (operators.includes(e.target.name)) {
      setOperator(e.target.name);
    }
    if (operator) {
      setRight(right.concat(e.target.name));
    }
    else {
      setLeft(left.concat(e.target.name));
    }
  }

  const clear = () => {
    setRes("");
  }

  const backspace = () => {
    setRes(res.slice(0, -1));
  }

  const calculate = () => {
    try {
      switch (operator) {
        case "+":
          setRes((parseFloat(left) + parseFloat(right)).toString());
          break;
        case "-":
          setRes((parseFloat(left) - parseFloat(right)).toString());
          break;
        case "*":
          setRes((parseFloat(left) * parseFloat(right)).toString());
          break;
        case "/":
          setRes((parseFloat(left) / parseFloat(right)).toString());
          break;
        default:
          return
      }
      
      setRight("");
      setOperator("");
    }
    catch (err) {
      setRes("Error");
    }
  }

  useEffect(() => {
    setLeft(res);
  }, [calculate])

  return (
    <div className="App">
      <form>
        <input type="text" value={res} />
      </form>

      <div className="keypad">
        <button className="highlight" onClick={clear} id="clear">Clear</button>
        <button onClick={backspace}>C</button>
        <button name="/" onClick={handleClick}>/</button>

        <button name="7" onClick={handleClick}>7</button>
        <button name="8" onClick={handleClick}>8</button>
        <button name="9" onClick={handleClick}>9</button>
        <button name="*" onClick={handleClick}>X</button>

        <button name="4" onClick={handleClick}>4</button>
        <button name="5" onClick={handleClick}>5</button>
        <button name="6" onClick={handleClick}>6</button>
        <button name="-" onClick={handleClick}>-</button>

        <button name="1" onClick={handleClick}>1</button>
        <button name="2" onClick={handleClick}>2</button>
        <button name="3" onClick={handleClick}>3</button>
        <button name="+" onClick={handleClick}>+</button>

        <button name="0" onClick={handleClick}>0</button>
        <button name="." onClick={handleClick}>.</button>
        <button className="highlight" onClick={calculate} id="equals">=</button>
      </div>
    </div>
  );
}

export default App;
