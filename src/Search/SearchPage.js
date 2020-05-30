import React, { Suspense, useEffect, useState } from "react";
import { connect } from "react-redux";
import SearchBar from "./SearchBar";
import { setQuery, setDataSource, search } from "../actions";
import Logo from "../Site/Logo";
// import { decodeDataSourceIdentifier } from "../usda";
import { push } from "connected-react-router";
import LazyLoadingFallback from "../common/LazyLoadingFallback";
import { Box } from "@material-ui/core";
import useDebounce from "../common/useDebounce";
import { get } from "lodash";

const SearchResult = React.lazy(() => import("./SearchResult"));

const decodeDataSource = (ds) =>
  ({
    any: "BOTH",
    "Standard Reference": "STANDARD_REFERENCE",
    "Branded Food Products": "BRANDED_FOOD_PRODUCTS",
  }[ds]);

const SearchPage = ({ push, location, search, searching, error, result }) => {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 100);
  const [dataSource, setDataSource] = useState("STANDARD_REFERENCE");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    if (urlParams.has("dataSource"))
      setDataSource(
        decodeDataSource(decodeURIComponent(urlParams.get("dataSource")))
      );
    if (urlParams.has("query"))
      setQuery(decodeURIComponent(urlParams.get("query")));
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
  push,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
