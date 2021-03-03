import react from "react";
import Login from "./Login";
import input from "./Input";

var isLoggedIn = false;
function renderCondtionally() {
  if (isLoggedIn === true) {
    return <h1>Hello</h1>;
  } else {
    return <Login />;
  }
}

function App() {
  return <div className="container">{renderCondtionally()}</div>;
}

export default App;
