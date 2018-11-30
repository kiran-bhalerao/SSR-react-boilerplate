import React from "react";
import "@babel/polyfill";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import Routes from "./routes"


if (typeof window !== "undefined") {
  ReactDOM.hydrate(
      <BrowserRouter>
        <div>{renderRoutes(Routes)}</div>
      </BrowserRouter>,
    document.querySelector("#root")
  );
}
