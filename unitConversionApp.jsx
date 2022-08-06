const App = () => {
  const [amount, setAmount] = React.useState(0);
  const [flipped, setFlipped] = React.useState(false);

  const onChange = (event) => {
    setAmount(event.target.value);
  };

  const reset = () => setAmount(0);

  const onFlip = () => setFlipped((current) => !current);
  // if flipped is false => true
  // if flipped is true => false

  return (
    <div>
      <h1>Super Converter</h1>
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
      <button onClick={onFlip}>Flip</button>
    </div>
  );
};

const root = document.querySelector("#root");
ReactDOM.render(<App />, root);
