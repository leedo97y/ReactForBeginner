/**
 * props is Object
 * so you can write argument like this
 * ex) {text}
 */

function Btn({ text, onClick }) {
  console.log(text, "was rendered");
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: "tomato",
        color: "white",
        padding: "10px 20px",
        borderRadius: 10,
        border: "1px solid tomato",
        // font {big} is true => 18px, {big} is false => 15px
      }}
    >
      {text}
    </button>
  );
}

const MemorizedBtn = React.memo(Btn);
// prevent re-rendering Btn that doesn't change
// if you don't prevent re-rendering problems, program will be slower

// Main App Component
const App = () => {
  const [value, setValue] = React.useState("Save Changes");
  const changeValue = () => {
    setValue("Revert Changes");
  };
  return (
    <div>
      <MemorizedBtn text={value} onClick={changeValue} />
      <MemorizedBtn text="Continue" />
    </div>
  );
  // text, onClick is just Props. Not an eventListener
  // So you must write it on function Btn's argument.
  // and you must write it down on Btn's html code too.
};

const root = document.querySelector("#root");
ReactDOM.render(<App />, root);
