// 실제 개발자들은 모듈을 다운 받아서 작업함
const root = document.getElementById("root");
const h3 = React.createElement(
  "h3",
  {
    onMouseEnter: () => console.log("i'm here!!"),
  },
  "Count Number : "
);
const button = React.createElement(
  "button",
  {
    onClick: () => console.log("Clicked!!"),
  },
  "Click"
);
const container = React.createElement("div", null, [h3, button]);
// use react Dom - rander span in root
ReactDOM.render(container, root);

// ______________________________________________________________
