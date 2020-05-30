import "./rhlConfig"; // Needs to be in a separate file and needs to be first
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import createStore from "./store.js";
import { Provider } from "react-redux";

const store = createStore();

const render = () => {
  ReactDOM.render(
    // The store provider has to be outside of the hot App so that it won't be
    // reloaded when there's an update
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
};

serviceWorker.unregister();

render();
