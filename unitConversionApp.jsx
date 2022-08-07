function Btn({ text }) {
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
      <Btn text="Save Changes" />
      <Btn text="Continue" />
    </div>
  );
};

const root = document.querySelector("#root");
ReactDOM.render(<App />, root);
