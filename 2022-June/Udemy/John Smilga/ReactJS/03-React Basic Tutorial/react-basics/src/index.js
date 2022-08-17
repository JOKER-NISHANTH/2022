import React from "react";
import ReactDom from "react-dom";

/*
    Mini Book Project
*/

const BookList = () => {
  return (
    <section>
      <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};
const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/51-nXsSRfZL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
    alt="Atomic-Habits"
  />
);

const Title = () => <h1>Atomic Habits: The life-changing million</h1>;
const Author = () => <h3>James Clear</h3>;
ReactDom.render(<BookList />, document.getElementById("root"));
