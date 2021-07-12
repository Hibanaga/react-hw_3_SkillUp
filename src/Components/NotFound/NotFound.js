import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes";

export default function NotFound() {
  return (
    <article className="wrapperArticleNotFound">
      <div className="wrapperNotFound">
        <div className="infoPageTitle">
          <h1 className="titleNotFound"> page not found</h1>
          <h2 className="subtitleNotFound">404</h2>
        </div>

        <NavLink
          className="linkRouteMain"
          //   activeClassName="activeLinkRoute"
          to={routes.home}
        >
          return to main page...
        </NavLink>
      </div>
    </article>
  );
}
