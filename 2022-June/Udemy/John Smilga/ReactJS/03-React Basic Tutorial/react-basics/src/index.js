import React from "react";
import ReactDom from "react-dom";
import "./index.css";
/*
    Mini Book Project
    Props
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
          return (
            <Book
              // Old methods
              // img={book.img}
              // author={book.author}
              // title={book.title}
              // altImg={book.altImg}

              //  passing object as props
              // book={book}

              // key props
              key={book.id}
              //* passing props using spread operator
              {...book}
            />
          );
        })}
    </section>
  );
};

const Book = (props) => {
  console.log(props);
  // const { title, author, img, altImg } = props;

  // const { title, author, img, altImg } = props.book;

  const { title, author, img, altImg } = props;
  return (
    <article className="book">
      <img src={img} alt={altImg} />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};
ReactDom.render(<BookList />, document.getElementById("root"));
