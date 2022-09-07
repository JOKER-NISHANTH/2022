import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("form submitted");
  };
  return (
    <>
      <article>
        {/* <form action="" method="post" className="form" onSubmit={handleSubmit}> */}
        <form action="" className="form">
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input type="text" id="firstName" name="firstName" />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input type="email" id="email" name="email" />
          </div>
          {/* <button type="submit" > */}
          <button type="submit" onClick={handleSubmit}>
            add person
          </button>
        </form>
      </article>
    </>
  );
};

export default ControlledInputs;
