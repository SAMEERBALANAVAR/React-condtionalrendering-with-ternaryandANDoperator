import react from "react";
import login from "./Login";

var isLoggedIn = true;
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
