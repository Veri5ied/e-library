import React, { createContext, useState } from "react";

export const BookContext = createContext();
const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "Learn coding the hard way", author: "Alvin Uchenna", id: 1 },
    { title: "Learn coding the easy way", author: "Alvin Uchenna", id: 2 },
    { title: "Context api and hooks", author: "Alvin Uchenna", id: 3 },
    { title: "Creating a custom theme", author: "Alvin Uchenna", id: 4 },
  ]);

  const addBook = (title, author) => {
    setBooks([...books, { title: title, author: author, id: Math.random() }]);
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };
  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
