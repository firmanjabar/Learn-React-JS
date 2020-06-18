import React from "react";

const navbar = ({ totalCounter }) => {
  return (
    <nav class="navbar navbar-dark bg-dark">
      <span class="navbar-brand mb-0 h1">{totalCounter}</span>
    </nav>
  );
};

export default navbar;
