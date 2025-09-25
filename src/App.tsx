import "./App.css";
import CommonButton from "./components/button/CommonButton";
import CommonInput from "./components/input/CommonInput";
import CommonLabel from "./components/label/CommonLabel";

function App() {

  return (
    <>
      <CommonLabel props={{ text: "Username", className: "label" }} />
      <CommonInput props={{ type: "text", placeholder: "Enter your username", className: "input" }} />
      <CommonButton props={{ type: "submit", className: "button", onClick: () => alert("Hidup Jokowi!") }}>
        Submit
      </CommonButton>
    </>
  );
}

export default App;
