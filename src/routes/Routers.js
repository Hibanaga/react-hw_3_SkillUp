import React from "react";
import { Switch, Route } from "react-router-dom";
import Gallery from "../Components/Gallery/Gallery";
import Home from "../Components/Home";
import PhoneBook from "../Components/phonebook/PhoneBook";

import routes from "../routes";
import "./routes.scss";

const Routers = () => {
  return (
    <main className="main">
      <div className="containerMain">
        <Switch>
          <Route exact path={routes.home} component={Home} />
          <Route exact path={routes.phonebook} component={PhoneBook} />
          <Route exact path={routes.gallery} component={Gallery} />
          <Route exact path={routes.gallery} />
        </Switch>
      </div>
    </main>
  );
};

export default Routers;
