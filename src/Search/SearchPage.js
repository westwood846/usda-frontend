import React, { Suspense, useEffect } from "react";
import { connect } from "react-redux";
import SearchBar from "./SearchBar";
import { setQuery, setDataSource, search } from "../actions";
import Logo from "../Logo";
import { decodeDataSourceIdentifier } from "../usda";
import LazyLoadingFallback from "../common/LazyLoadingFallback";

const SearchResult = React.lazy(() => import("./SearchResult"));

const SearchPage = ({
  location,
  dataSource,
  setDataSource,
  query,
  setQuery,
  search,
  searching,
  error,
  result,
}) => {
  useEffect(() => {
    let urlParams = new URLSearchParams(window.location.search);

    if (
      urlParams.has("dataSource") &&
      urlParams.get("dataSource") !== dataSource
    ) {
      setDataSource(urlParams.get("dataSource"));
    }
    if (urlParams.has("query")) {
      if (urlParams.get("query") !== query) {
        setQuery(urlParams.get("query"));
        search();
      }
    } else {
      setQuery("");
    }
  }, [location, dataSource, setDataSource, query, setQuery, search]);

  let renderResult = searching ? (
    <span>
      Searching for "{query}" in {decodeDataSourceIdentifier(dataSource)}...
    </span>
  ) : error ? (
    error.errors.error.map((error, index) => (
      <div key={index} style={{ color: "red" }}>
        {error.message}
      </div>
    ))
  ) : result ? (
    <Suspense fallback={<LazyLoadingFallback />}>
      <SearchResult result={result} />
    </Suspense>
  ) : null;

  return (
    <div className="SearchPage">
      <div className="header">
        <Logo />
        <SearchBar />
      </div>
      <hr />
      <div className="ResultContainer">{renderResult}</div>
    </div>
  );
};

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
