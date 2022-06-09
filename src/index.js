import React from "react";
import ReactDOM from "react-dom";

function App() {
  const firstName = "Ivan";
  const lastName = "carreno";

  const styles = {
    color: "red",
    backgroundColor: "blue",
    fontSize: 50
  };

  return (
    <div>
      <h1 style={styles}>Hello World!</h1>
      <p>{`${firstName} ${lastName}`}</p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
