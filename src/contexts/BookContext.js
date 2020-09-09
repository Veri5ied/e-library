import React, { createContext, useState, useEffect } from "react";

export const BookContext = createContext();
const BookContextProvider = (props) => {
  const [books, setBooks] = useState([], () => {
    const localData = localStorage.getItem("books");
    return localData ? JSON.parse(localData) : [];
  });

  const addBook = (title, author) => {
    setBooks([...books, { title: title, author: author, id: Math.random() }]);
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };
//setting all inputs to localstorage
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
