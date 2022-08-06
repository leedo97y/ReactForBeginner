const root = document.querySelector("#root");

// creating react element
const App = () => {
  const [counter, setCounter] = React.useState(0);
  // 여기서 useState는 숫자 배열을 만들어준다.
  const onClick = () => {
    setCounter(counter + 1);
    // = calculate next State
  };
  // 1. counter를 받아서 return의 h3의 counter에 넣어준다.
  // 2. 버튼을 누르면 onClick 이벤트 함수가 실행됨.
  // 3. onClick 함수의 setCounter는 새로운 값을 가지고 h3의 counter를 업데이트 해준다.
  return (
    <div>
      <h3>Total Clicks : {counter}</h3>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
};

ReactDOM.render(<App />, root);
// if State change, Rerendering
