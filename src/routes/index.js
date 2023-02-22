import React from "react";
import { Route, Routes } from "react-router-dom";
import { Article, Fallback, Filter, Home } from "../pages";
import routes from "./allRoutes";

const RoutesCom = () => {
  return (
    <Routes>
      <Route path={routes.home.route} element={<Home />} />
      <Route path={routes.article.route} element={<Article />} />
      <Route path={routes.filter.route} element={<Filter />} />
      <Route path="*" element={<Fallback />} />
    </Routes>
  );
};

export default RoutesCom;
