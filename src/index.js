import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import store, { history } from "./store.js";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

ReactDOM.render(
  <Provider store={store()}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
