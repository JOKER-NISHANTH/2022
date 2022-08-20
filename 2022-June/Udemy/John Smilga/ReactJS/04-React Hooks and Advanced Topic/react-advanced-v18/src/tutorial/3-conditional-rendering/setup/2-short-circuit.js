import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const firstValue = text || "hello world";
  const secondValue = text && "hello world";
  return (
    <>
      <h2>short circuit</h2>
      {/* <h2> value 1 : {firstValue}</h2>
      <h2> value 2 : {secondValue}</h2> */}
      {text || (
        <h2>
          default data <code>||</code>
        </h2>
      )}
      {text && (
        <h2>
          default data <code>&&</code>
        </h2>
      )}
      {!text && <h2>Hello World ! </h2>}
    </>
  );
};

export default ShortCircuit;
