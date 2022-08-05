const root = document.getElementById("root");

const Title = () => (
  <h3
    id="title"
    onMouseEnter={() => {
      console.log("Hi");
    }}
  >
    Hello I'm a title
  </h3>
);
const Button = () => (
  <button
    style={{ backgroundColor: "tomato" }}
    onClick={() => {
      console.log("I'm clicked");
    }}
  >
    Click Me
  </button>
);

const Container = () => (
  <div>
    <Title />
    <Button />
  </div>
);
// add components
// components first letter = UPPERCASE
// Do not use LOWERCASE
// if you write component by using LOWERCASE, JSX read it as a html code
ReactDOM.render(<Container />, root);
