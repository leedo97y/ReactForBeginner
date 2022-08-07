function Btn(props) {
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
      Save Change
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
