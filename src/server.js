import "babel-polyfill";
import express from "express";
import { matchPath } from "react-router-dom";
import routes from "./client/routes";
import renderer from "./helpers/renderer.js";
import createStore from "./helpers/createStore";

const app = express();
app.use(express.static("public"));
app.get("*", (req, res) => {
  const store = createStore();
  const activeRoutes = routes.filter(route => matchPath(req.path, route));
  const promises = activeRoutes.map(
    route => (route.loadData ? route.loadData(store) : null)
  );
  Promise.all(promises).then(() => {
    res.send(renderer(req, store));
  });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
