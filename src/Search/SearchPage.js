import React, { Component } from "react";
import { connect } from "react-redux";
import SearchResult from "./SearchResult";
import SearchBar from "./SearchBar";
import { setQuery, setDataSource, search } from "../actions";
import Logo from "../Logo";
import { decodeDataSourceIdentifier } from "../usda";

class SearchPage extends Component {
  constructor(props) {
    super(props);
    let urlParams = new URLSearchParams(window.location.search);
    if (
      urlParams.has("dataSource") &&
      urlParams.get("dataSource") !== this.props.dataSource
    ) {
      this.props.setDataSource(urlParams.get("dataSource"));
    }
    if (urlParams.has("query")) {
      if (urlParams.get("query") !== this.props.query) {
        this.props.setQuery(urlParams.get("query"));
        this.props.search();
      }
    } else {
      this.props.setQuery("");
    }
  }

  render() {
    let result = this.props.searching ? (
      <span>
        Searching for "{this.props.query}" in{" "}
        {decodeDataSourceIdentifier(this.props.dataSource)}...
      </span>
    ) : this.props.error ? (
      this.props.error.errors.error.map((error, index) => (
        <div key={index} style={{ color: "red" }}>
          {error.message}
        </div>
      ))
    ) : this.props.result ? (
      <SearchResult result={this.props.result} />
    ) : null;

    return (
      <div className="SearchPage">
        <div className="header">
          <Logo />
          <SearchBar />
        </div>
        <hr />
        <div className="ResultContainer">{result}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  searching: state.app.searching,
  query: state.app.searchQuery,
  dataSource: state.app.searchDataSource,
  result: state.app.searchResult,
  // items: get(state.app.searchResult, 'list.item'),
  error: state.app.searchError,
});

const mapDispatchToProps = {
  setQuery,
  setDataSource,
  search,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
