import React from "react";

const pageHeader = (props) => (
  <header className="page-header">
    <h2>
      {props.name} <small>{props.small}</small>
    </h2>
  </header>
);

export default pageHeader;
