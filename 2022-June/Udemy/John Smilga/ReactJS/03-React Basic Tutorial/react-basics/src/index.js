import React from "react";
import ReactDom from "react-dom";
import "./index.css";
/*
    Mini Book Project
    Props
*/

// setup vars
const data = {
  author: "James Clear",
  title: "Atomic Habits: The life-changing million",
  img: "https://images-na.ssl-images-amazon.com/images/I/51-nXsSRfZL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
};

const BookList = () => {
  return (
    <section className="BookList">
      <Book job="developer" />
      <Book title={data.title} author={data.author} img={data.img}>
        {/* children */}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla magni
          nemo sed molestiae veritatis unde tempore voluptatum labore qui sunt.
        </p>
        {/* children */}
      </Book>
    </section>
  );
};

const Book = (props) => {
  const { title, author, job, img, children } = props;
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt="Atomic-Habits" />
      <h1>{title}</h1>
      <>{children}</>
      <h4
        style={{
          color: "green",
          fontSize: "1.5rem",
          marginTop: "2rem",
        }}
      >
        {author}
      </h4>
    </article>
  );
};
ReactDom.render(<BookList />, document.getElementById("root"));
