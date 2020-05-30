import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import SearchPage from "./Search/SearchPage";
import ReportPage from "./Report/ReportPage";
import TablePage from "./Table/TablePage";
import CompareToaster from "./Table/CompareToaster";
import { ConnectedRouter } from "connected-react-router";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import { hot } from "react-hot-loader";
import { history } from "./store.js";

const App = () => {
  return (
    <ConnectedRouter history={history} basename={process.env.PUBLIC_URL}>
      <div className="App">
        <ThemeProvider theme={theme}>
          <Switch>
            <Route path="/" exact component={SearchPage} />
            <Route path="/search" exact component={SearchPage} />
            <Route path="/report/:ndbno" component={ReportPage} />
            <Route path="/compare" exact component={TablePage} />
          </Switch>
          <CompareToaster />
        </ThemeProvider>
      </div>
    </ConnectedRouter>
  );
};

// this hot(module)(Component) call proved to be the secret sauce!
// It is important that this hot component lives in it's own file.
export default hot(module)(App);
