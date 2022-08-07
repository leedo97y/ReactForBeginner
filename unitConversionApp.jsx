function Btn({ text, big }) {
  /**
   * props is Object
   * so you can write argument like this
   * ex) {text}
   */
  return (
    <button
      style={{
        backgroundColor: "tomato",
        color: "white",
        padding: "10px 20px",
        borderRadius: 10,
        border: "1px solid tomato",
        fontSize: big ? 18 : 15,
        // font {big} is true => 18px, {big} is false => 15px
      }}
    >
      {text}
    </button>
  );
}

// Main App Component
const App = () => {
  return (
    <div>
      <Btn text="Save Changes" big={true} />
      <Btn text="Continue" big={false} />
    </div>
  );
};

const root = document.querySelector("#root");
ReactDOM.render(<App />, root);
