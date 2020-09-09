import React, { useContext } from "react";
import { BookContext } from "../../contexts/BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1>E-Book Library</h1>
      <h4>You have {books.length} book(s) left in your Library</h4>
    </div>
  );
};

export default Navbar;
