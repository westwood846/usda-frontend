import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import SearchPage from "./Search/SearchPage";
import ReportPage from "./Report/ReportPage";
import TablePage from "./Table/TablePage";
import CompareToaster from "./Table/CompareToaster";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./store";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <ConnectedRouter history={history} basename={process.env.PUBLIC_URL}>
            <Switch>
              <Route path="/" exact component={SearchPage} />
              <Route path="/search" exact component={SearchPage} />
              <Route path="/report/:ndbno" component={ReportPage} />
              <Route path="/compare" exact component={TablePage} />
            </Switch>
            <CompareToaster />
          </ConnectedRouter>
        </ThemeProvider>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
