// default value를 설정해줄 수 있음
// fontSize가 존재하지 않는다면 default value로 설정됨
function Btn({ text, fontSize = 15, onClick }) {
  // 위의 argument들은 다음으로 대체가능하다.
  // props를 argument 부분에 적은 뒤,
  // props.text, props.fontSize, props.onClick으로 활용가능하다.
  return (
    <button
      onClick={onClick}
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
// propTypes를 지정하기 위해선 우선 패키지?를 설치해야한다.
// propTypes를 지정해주면, type을 틀렸을때 경고 문구가 뜬다.
// 어디서 오류가 났는지 파악하기 쉬움

const MemorizeButton = React.memo(Btn);
// 버튼의 상태를 저장해주어 바뀌지 않은 버튼의 re-rendering을 피하게 해준다.

const App = () => {
  const [textValue, setTextValue] = React.useState("Save Changes");
  const changeText = () => {
    setTextValue("Revert Changes");
  };
  return (
    <div>
      <MemorizeButton text={textValue} fontSize={18} onClick={changeText} />
      <MemorizeButton text="Continue" />
    </div>
  );
};

const root = document.querySelector("#root");
ReactDOM.render(<App />, root);
