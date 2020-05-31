import React, { Suspense, useEffect, useState } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";

import { get } from "lodash";

import { Box } from "@material-ui/core";

import Logo from "../Site/Logo";
import SearchBar from "./SearchBar";
import LazyLoadingFallback from "../common/LazyLoadingFallback";

import useDebounce from "../common/useDebounce";
import { decodeDataSource, dataSources } from "../usda";
import { setQuery, setDataSource, search } from "../actions";

const SearchResult = React.lazy(() => import("./SearchResult"));

const SearchPage = ({ push, location, search, searching, error, result }) => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 100);
  const [dataSource, setDataSource] = useState(dataSources.STANDARD);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    if (urlParams.has("query"))
      setQuery(decodeURIComponent(urlParams.get("query")));
    if (urlParams.has("dataSource"))
      setDataSource(
        decodeDataSource(decodeURIComponent(urlParams.get("dataSource")))
      );
  }, [location]);

  useEffect(() => {
    if (!searching && get(result, "list.item.length", 0) > 0)
      push(
        `?query=${get(result, "list.q")}&dataSource=${get(result, "list.ds")}`
      );
  }, [push, result, searching]);

  useEffect(() => {
    if (debouncedQuery && debouncedQuery.trim().length > 0)
      search(debouncedQuery, dataSource);
  }, [debouncedQuery, dataSource, search]);

  return (
    <div className="SearchPage">
      <div className="header">
        <Box mr={3}>
          <Logo />
        </Box>
        <SearchBar
          query={query}
          setQuery={setQuery}
          dataSource={dataSource}
          setDataSource={setDataSource}
        />
      </div>
      <hr />
      <div className="ResultContainer">
        {(searching || result || error) && (
          <Suspense fallback={<LazyLoadingFallback />}>
            <SearchResult
              searching={searching}
              result={result}
              error={error}
              query={query}
              dataSource={dataSource}
            />
          </Suspense>
        )}
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
  push,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
