const App = () => {
  // change function을 걸어줄 모든 부분에 쓰이므로 minutes에서 amount로 변경함
  const [amount, setAmount] = React.useState(0);
  const [grams, setGrams] = React.useState(0);
  const [flipped, setFlipped] = React.useState(false);
  const [hide, setHide] = React.useState(false);

  const onChange = (event) => {
    setAmount(event.target.value);
  };

  const onMileChange = (event) => {
    setGrams(event.target.value);
  };

  const reset = () => {
    setAmount(0);
    setGrams(0);
  };

  const onFlip = () => {
    reset();
    setFlipped((current) => !current);
  };
  // if flipped is false => true
  // if flipped is true => false

  const onSwitch = () => {
    reset();
    setHide((current) => !current);
  };

  return (
    <div>
      <h1>Super Converter</h1>
      <div hidden={hide}>
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
      <div hidden={hide}>
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
      <div hidden={!hide}>
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
      <div hidden={!hide}>
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
      <div hidden={!hide}>
        <label htmlFor="grams">Grams</label>
        <input
          id="grams"
          value={flipped ? grams * 1000 : grams}
          placeholder="Grams"
          type="number"
          onChange={onMileChange}
          disabled={flipped === true}
        />
      </div>
      <div hidden={!hide}>
        <label htmlFor="kilograms">Kilograms</label>
        <input
          id="kilograms"
          value={flipped ? grams : grams / 1000}
          placeholder="kiloGrams"
          type="number"
          onChange={onMileChange}
          disabled={flipped === false}
        />
      </div>
      <button onClick={reset}>Reset</button>
      <button onClick={onFlip}>{flipped ? "Turn back" : "Flip"}</button>
      <button onClick={onSwitch}>{hide ? "Turn back" : "Other Mode"}</button>
    </div>
  );
};

const root = document.querySelector("#root");
ReactDOM.render(<App />, root);
