import React from "react";

// useState
// import Setup from "./tutorial/1-useState/setup/1-error-example";
// import Setup from "./tutorial/1-useState/setup/2-useState-basics";
// import Setup from "./tutorial/1-useState/setup/3-useState-array";
// import Setup from "./tutorial/1-useState/setup/4-useState-object";
// import Setup from "./tutorial/1-useState/setup/5-useState-counter";

// useEffect
// import Setup from "./tutorial/2-useEffect/setup/1-useEffect-basics";
// import Setup from "./tutorial/2-useEffect/setup/2-useEffect-cleanup";
// import Setup from "./tutorial/2-useEffect/setup/3-useEffect-fetch-data";

// conditional Rendering
import Setup from "./tutorial/3-conditional-rendering/setup/1-multiple-returns";
// import Setup from "./tutorial/3-conditional-rendering/setup/2-short-circuit";

/*
  component name must be uppercase
  must be in the function/component body
  cannot call Conditionally
*/

function App() {
  return (
    <div className="container">
      <Setup />
    </div>
  );
}

export default App;
