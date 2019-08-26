import React from "react";

const Navbar = props => (
    <div className="bg-dark navbar-dark container-fluid text-center">
      <div className="row">
        <div className="col-md-4">
          <h2>Clicky Game</h2>
        </div>
          <h3>Score: {props.score} | Top Score: {props.topScore}</h3>
        </div>
      </div>
);