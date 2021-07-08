import React from "react";
import "./routes.scss";
import { NavLink } from "react-router-dom";
import routes from "../routes";

const Links = () => {
  return (
    <header className="header">
      <NavLink
        className="linkRoute"
        activeClassName="activeLinkRoute"
        to={routes.phonebook}
      >
        phonebook
      </NavLink>
      <NavLink
        className="linkRoute"
        activeClassName="activeLinkRoute"
        to={routes.gallery}
      >
        imagefinder
      </NavLink>
    </header>
  );
};

export default Links;
