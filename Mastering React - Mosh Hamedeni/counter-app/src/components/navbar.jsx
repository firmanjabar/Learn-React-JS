import React from "react";

const navbar = (props) => {
  return (
    <nav class="navbar navbar-dark bg-dark">
      <span class="navbar-brand mb-0 h1">{props.totalCounter}</span>
    </nav>
  );
};

export default navbar;
