import React from "react";
import ReactDom from "react-dom";
import "./index.css";
/*
    Attribute
    EventHandler
*/

// setup vars
const books = [
  {
    id: 1,
    author: "James Clear",
    title: "Atomic Habits: The life-changing million",
    img: "https://images-na.ssl-images-amazon.com/images/I/51-nXsSRfZL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    altImg: "Atomic-Habits",
  },
  {
    id: 2,
    author: "George Matthew Adams",
    title: "You Can",
    img: "https://images-eu.ssl-images-amazon.com/images/I/813uPMOnskL._AC_UL604_SR604,400_.jpg",
    altImg: "You Can",
  },
  {
    id: 3,
    author: "Paulo Coelho",
    title: "The Alchemist",
    img: "https://images-eu.ssl-images-amazon.com/images/I/71aFt4+OTOL._AC_UL604_SR604,400_.jpg",
    altImg: "The Alchemist",
  },
];

const BookList = () => {
  return (
    <section className="BookList">
      {books &&
        books.map((book) => {
          return <Book key={book.id} {...book} />;
        })}
    </section>
  );
};

const Book = ({ title, author, img, altImg }) => {
  // attribute and eventHandler
  // onClick
  // onMouseOver
  const clickHandler = () => {
    alert("Click");
  };
  const complexHandler = (author) => {
    alert(author);
  };
  return (
    <article className="book">
      <img src={img} alt={altImg} />
      <h1 onClick={() => alert(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        reference
      </button>

      <button type="button" onClick={() => complexHandler(author)}>
        more complex
      </button>
    </article>
  );
};
ReactDom.render(<BookList />, document.getElementById("root"));
