import React from "react";

const Book = ({ isbn, title, author, price, pages }) => {
  return (
    <div className="book">
      <h2 className="title">Title: {title}</h2>
      <p className="author">Author: {author}</p>
      <p className="isbn">ISBN: {isbn}</p>
      <p className="pages">Pages: {pages}</p>
      <p className="price">Price: ${price}</p>
    </div>
  );
};

export default Book;