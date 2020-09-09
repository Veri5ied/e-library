import React from "react";
import BookContextProvider from "./contexts/BookContext";
import Navbar from "./components/navbar/Navbar";
import BookList from "./components/book/BookList";
import BookForm from "./components/book/BookForm";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookForm />
        <BookList />
      </BookContextProvider>
    </div>
  );
}

export default App;
