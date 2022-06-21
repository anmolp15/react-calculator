
function App() {

  function createDigitButtons() {
    let digits = [];
    for (let i=1; i<10; i++) {
      const btn = <button>{i}</button>
      digits.push(btn)
    }
    return digits;
  }

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <span>(0)</span> 0
        </div>
        <div className="operators">
          <button>/</button>
          <button>*</button>
          <button>+</button>
          <button>-</button>
          <button>DEL</button>
        </div>
        <div className="digits">
          {createDigitButtons()}

          <button>.</button>
          <button>0</button>
          <button>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
