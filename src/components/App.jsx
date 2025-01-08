import React from "react";
import Login from "./Login";

var isLoggedIn = false;

const currentTime = new Date().getHours();
console.log(currentTime);

/*function renderConditionally() {
  if(isLoggedIn){
    return <h1>Hello</h1>
  } else{
    return <Login />
  }
} */

function App() {
  return (
    <div className="container">
      {isLoggedIn ? <h1>Hello</h1> : <Login />}

      {currentTime > 12 ? <h1>You are on break</h1> : null}
      {currentTime > 12 && <h1>You are on break</h1>}
    </div>
  );
}

//&& operator in react, it looks at the left side and if true
//looks at the right side. && gets the same result as... ? ... : ...

export default App;
