import React from "react";

const navbar = ({ totalCounter }) => {
  console.log("Navabar - Rendered");
  return (
    <nav className="navbar navbar-dark bg-dark">
      <span className="navbar-brand mb-0 h1">{totalCounter}</span>
    </nav>
  );
};

export default navbar;
