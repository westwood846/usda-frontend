import React from "react";
import { hot } from "react-hot-loader";
import { ConnectedRouter } from "connected-react-router";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./theme";
import { history } from "./store.js";

import Navbar from "./Site/Navbar";
import CompareToaster from "./Table/CompareToaster";

import routes from "./routes";

import "./App.css";

const App = () => {
  return (
    <ConnectedRouter history={history} basename={process.env.PUBLIC_URL}>
      <div className="App">
        <ThemeProvider theme={theme}>
          <Navbar />
          <CompareToaster />
          {routes}
        </ThemeProvider>
      </div>
    </ConnectedRouter>
  );
};

// this hot(module)(Component) call proved to be the secret sauce!
// It is important that this hot component lives in it's own file.
export default hot(module)(App);
