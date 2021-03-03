import react from "react";
import Login from "./Login";
import input from "./Input";

var isLoggedIn = false;

function App() {
  return (
    // ternaryoperator
    <div className="container">{isLoggedIn ? <h1>Hello</h1> : <Login />}</div>
  );
}

export default App;
