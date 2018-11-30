import React from "react";
import { renderToString } from "react-dom/server";
import Routes from "../../client/routes";
import { StaticRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";

export default (req, store) => {
  const content = renderToString(
    <StaticRouter location={req.path} context={{}}>
      <div>{renderRoutes(Routes)}</div>
    </StaticRouter>
  );
  return `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.client.js"></script>
      </body>
    </html>
  `;
};
