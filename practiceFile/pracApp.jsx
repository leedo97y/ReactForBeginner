// Component #1 Minutes - Hours
const MinutesToHours = () => {
  // change function을 걸어줄 모든 부분에 쓰이므로 minutes에서 amount로 변경함
  const [amount, setAmount] = React.useState(0);
  const [flipped, setFlipped] = React.useState(false);

  const onChange = (event) => {
    setAmount(event.target.value);
  };

  const reset = () => {
    setAmount(0);
  };

  const onFlip = () => {
    reset();
    setFlipped((current) => !current);
  };
  // if flipped is false => true
  // if flipped is true => false

  return (
    <div>
      <div>
        <label htmlFor="minutes">Minutes</label>
        <input
          id="minutes"
          value={flipped ? amount * 60 : amount}
          placeholder="Minutes"
          type="number"
          onChange={onChange}
          disabled={flipped === true}
        />
      </div>
      <div>
        <label htmlFor="hours">Hours</label>
        <input
          id="hours"
          value={flipped ? amount : Math.round(amount / 60)}
          // if flipped = minutes
          // if !flipped = Math.round(minutes / 60)
          placeholder="Hours"
          type="number"
          onChange={onChange}
          disabled={flipped === false}
        />
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={onFlip}>{flipped ? "Turn back" : "Flip"}</button>
    </div>
  );
};

// Component #2 Km - Miles
const KmToMiles = () => {
  const [amount, setAmount] = React.useState(0);
  const [flipped, setFlipped] = React.useState(false);

  const onChange = (event) => {
    setAmount(event.target.value);
  };

  const reset = () => {
    setAmount(0);
  };

  const onFlip = () => {
    reset();
    setFlipped((current) => !current);
  };

  return (
    <div>
      <div>
        <label htmlFor="miles">Miles</label>
        <input
          id="miles"
          value={flipped ? Math.round(amount * 0.6214 * 1000) / 1000 : amount}
          placeholder="Miles"
          type="number"
          onChange={onChange}
          disabled={flipped === true}
        />
      </div>
      <div>
        <label htmlFor="kilometers">Kilmeters</label>
        <input
          id="kilometers"
          value={flipped ? amount : Math.round((amount / 0.6214) * 1000) / 1000}
          placeholder="Kilometers"
          type="number"
          onChange={onChange}
          disabled={flipped === false}
        />
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={onFlip}>{flipped ? "Turn back" : "Flip"}</button>
    </div>
  );
};

// Main App Component
const App = () => {
  const [index, setIndex] = React.useState("xx");
  const onSelect = (event) => {
    setIndex(event.target.value);
  };
  return (
    <div>
      <h1>Super Converter</h1>
      <select value={index} onChange={onSelect}>
        <option value="xx">Select your units</option>
        <option value="0">Minutes & Hours</option>
        <option value="1">Miles & Kilometers</option>
      </select>
      <hr />
      {index === "xx" ? "please select your units" : null}
      {index === "0" ? <MinutesToHours /> : null}
      {index === "1" ? <KmToMiles /> : null}
    </div>
  );
};

const root = document.querySelector("#root");
ReactDOM.render(<App />, root);
