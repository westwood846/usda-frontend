import React, { Suspense, useEffect } from "react";
import { connect } from "react-redux";
import SearchBar from "./SearchBar";
import { setQuery, setDataSource, search } from "../actions";
import Logo from "../Site/Logo";
import { decodeDataSourceIdentifier } from "../usda";
import LazyLoadingFallback from "../common/LazyLoadingFallback";
import { Box } from "@material-ui/core";

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

  return (
    <div className="SearchPage">
      <div className="header">
        <Box mr={3}>
          <Logo />
        </Box>
        <SearchBar />
      </div>
      <hr />
      <div className="ResultContainer">
        <Suspense fallback={<LazyLoadingFallback />}>
          <SearchResult
            query={query}
            result={result}
            error={error}
            searching={searching}
            dataSource={dataSource}
          />
        </Suspense>
      </div>
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
