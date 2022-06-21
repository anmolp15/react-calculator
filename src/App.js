import { useState } from "react";

function App() {
  const [calc, setCalc] = useState('');

  function createDigitButtons() {
    let digits = [];
    for (let i=1; i<10; i++) {
      const btn = <button key={`btn-${i}`} onClick={() => updateCalc(i.toString())}>{i}</button>
      digits.push(btn)
    }
    return digits;
  }

  function updateCalc(value) {
    const operators = ['/', '*', '+', '-', '.']
    if (operators.includes(value) && operators.includes(calc.substring(calc.length-1))) {
      return;
    }
    setCalc(calc + value);
  }

  function calculate() {
    // eslint-disable-next-line
    setCalc(eval(calc).toString());
  }

  function handleDelete() {
    setCalc(calc.substring(0,calc.length-1))
  }

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {calc || '0'}
        </div>
        <div className="operators">
          <button onClick={() => updateCalc('/')}>/</button>
          <button onClick={() => updateCalc('*')}>*</button>
          <button onClick={() => updateCalc('+')}>+</button>
          <button onClick={() => updateCalc('-')}>-</button>
          <button onClick={handleDelete}>DEL</button>
        </div>
        <div className="digits">
          {createDigitButtons()}

          <button onClick={() => updateCalc('.')}>.</button>
          <button onClick={() => updateCalc('0')}>0</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
