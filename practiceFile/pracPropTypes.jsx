// default value를 설정해줄 수 있음
// fontSize가 존재하지 않는다면 default value로 설정됨
function Btn({ text, fontSize = 15 }) {
  return (
    <button
      style={{
        backgroundColor: "tomato",
        color: "white",
        padding: "10px 20px",
        borderRadius: 10,
        border: "1px solid tomato",
        fontSize,
      }}
    >
      {text}
    </button>
  );
}

Btn.propTypes = {
  text: PropTypes.string,
  fontSize: PropTypes.number,
};
// propTypes를 지정해주면, type을 틀렸을때 경고 문구가 뜬다.
// 어디서 오류가 났는지 파악하기 쉬움

const App = () => {
  return (
    <div>
      <Btn text="Save Changes" fontSize={18} />
      <Btn text="Continue" />
    </div>
  );
};

const root = document.querySelector("#root");
ReactDOM.render(<App />, root);
