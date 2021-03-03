import react from "react";

var isLoggedIn = false;
function renderCondtionally() {
  if (isLoggedIn === true) {
    return <h1>Hello</h1>;
  } else {
    return (
      <form className="form">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    );
  }
}

function App() {
  return <div className="container">{renderCondtionally()}</div>;
}

export default App;
