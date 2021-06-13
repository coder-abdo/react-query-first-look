import React from "react";

export const Navbar = ({ setPage }) => {
  return (
    <nav className="navbar">
      <button className="btn mr-2" onClick={() => setPage("planets")}>
        planets
      </button>
      <button className="btn" onClick={() => setPage("people")}>
        people
      </button>
    </nav>
  );
};
