import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import MainLayout from "../pages/MainLayout";

import { Menus } from "./config";

const BasicRoute = () => (
  <HashRouter>
    <Switch>
      {Menus.map((item, index) => {
        return (
          <Route
            key={index}
            path={item.path}
            component={item.component}
          ></Route>
        );
      })}
      <Route path={"/"} component={MainLayout}></Route>
    </Switch>
  </HashRouter>
);

export default BasicRoute;
