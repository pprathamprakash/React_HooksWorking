import React from "react";

var isDone = false;
var a = 1;

function strike() {
  isDone = true;
  ++a;
  console.log("Function ran");
  show();
  // console.log(isDone);
  // console.log(a);
}

function unStrike() {
  isDone = false;
  console.log("Function ran");
}

function App() {
  // function strike() {
  //   isDone = true;
  // }

  // function unStrike() {
  //   isDone = false;
  // }

  return (
    <div>
      <p style={isDone ? { textDecoration: "line-through" } : null}>Buy milk</p>
      <button onClick={strike}>Change to strike through</button>
      <button onClick={unStrike}>Change back</button>
    </div>
  );
}

function show() {
  console.log(isDone);
  console.log(a);
}

console.log(isDone);
console.log(a);

export default App;
