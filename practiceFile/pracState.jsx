const root = document.querySelector("#root");

// creating react element
const App = () => {
  const [counter, setCounter] = React.useState(0);
  // 여기서 useState는 숫자 배열을 만들어준다.
  const onClick = () => {
    setCounter((current) => current + 1);
    // set new State
    // 이 방법이 더 정확, 안전하긴 함
    // current를 통해 현재 값에 더해줌을 명시하고 있기 때문
    // = calculate next State

    // setCounter(counter + 1);
  };

  /**
   * 1. counter를 받아서 return의 h3의 counter에 넣어준다.
   * 2. 버튼을 누르면 onClick 이벤트 함수가 실행됨.
   * 3. onClick 함수의 setCounter는 새로운 값을 가지고 h3의 counter를 업데이트 해준다.
   *  */

  return (
    <div>
      <h3>Total Clicks : {counter}</h3>
      <button onClick={onClick}>Click Me</button>
    </div>
  );
};

ReactDOM.render(<App />, root);
// if State change, Rerendering

/**
 * State를 설정해주는 두가지 방법
 *
 * 1. 함수 만들어 주기 (더 나은 방법)
 * 2. 직접 값 지정
 *  */
