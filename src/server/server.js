import "babel-polyfill";
import express from "express";
import { matchPath } from "react-router-dom";
import Loadable from "react-loadable";
import routes from "../client/routes";
import renderer from "./helpers/renderer.js";
import createStore from "./helpers/createStore";

const app = express();

app.use(express.static("public"));
app.get("*", (req, res, next) => {
  const store = createStore(req);
  const activeRoute = routes.find(route => matchPath(req.path, route)) || {};
  const promise = activeRoute.fetchInitialData
    ? activeRoute.fetchInitialData(store)
    : Promise.resolve();

  promise
    .then(() => {
      const context = {};
      const content = renderer(req, store, context);
      if (context.url) {
        return res.redirect(301, context.url);
      }
      if (context.notFound) {
        res.status(404);
      }
      res.send(content);
    })
    .catch(next);
});
Loadable.preloadAll().then(() => {
  app.listen(3000, () => {
    console.log("Listening on port 3000");
  });
});
