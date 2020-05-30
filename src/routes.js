import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import LazyLoadingFallback from "./common/LazyLoadingFallback";

import SearchPage from "./Search/SearchPage";
const ReportPage = React.lazy(() => import("./Report/ReportPage"));
const TablePage = React.lazy(() => import("./Table/TablePage"));

export const routes = (
  <Suspense fallback={<LazyLoadingFallback />}>
    <Switch>
      <Route path="/" exact component={SearchPage} />
      <Route path="/search" exact component={SearchPage} />
      <Route path="/report/:ndbno" component={ReportPage} />
      <Route path="/compare" exact component={TablePage} />
    </Switch>
  </Suspense>
);

export default routes;
