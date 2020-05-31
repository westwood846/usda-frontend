import React, { Suspense, useEffect, useState, useMemo } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";

import { get } from "lodash";

import { Box, Container } from "@material-ui/core";

import Logo from "../Site/Logo";
import SearchBar from "./SearchBar";
import LazyLoadingFallback from "../common/LazyLoadingFallback";

import useDebounce from "../common/useDebounce";
import { decodeDataSource, dataSources } from "../usda";
import { setQuery, setDataSource, search } from "../actions";

const SearchResult = React.lazy(() => import("./SearchResult"));

const DEFAULT_QUERY = "";
const DEFAULT_DATA_SOURCE = dataSources.STANDARD;

const SearchPage = ({ push, location, search, searching, error, result }) => {
  const urlParams = useMemo(() => new URLSearchParams(location.search), [
    location.search,
  ]);

  const [query, setQuery] = useState(
    urlParams.has("query")
      ? decodeURIComponent(urlParams.get("query"))
      : DEFAULT_QUERY
  );
  const [dataSource, setDataSource] = useState(
    urlParams.has("dataSource")
      ? decodeDataSource(decodeURIComponent(urlParams.get("dataSource")))
      : DEFAULT_DATA_SOURCE
  );

  const debouncedQuery = useDebounce(query, 200);

  // Reset state when query params get removed
  useEffect(() => {
    if (!urlParams.has("query")) setQuery(DEFAULT_QUERY);
    if (!urlParams.has("dataSource")) setDataSource(DEFAULT_DATA_SOURCE);
  }, [urlParams]);

  // Update URL on successful search
  useEffect(() => {
    if (!searching && get(result, "list.item.length", 0) > 0)
      push(
        `?query=${get(result, "list.q")}&dataSource=${get(result, "list.ds")}`
      );
  }, [push, result, searching]);

  // Trigger search on state change
  useEffect(() => {
    if (debouncedQuery && debouncedQuery.trim().length > 0)
      search(debouncedQuery, dataSource);
  }, [debouncedQuery, dataSource, search]);

  const searchBar = (
    <SearchBar
      query={query}
      setQuery={setQuery}
      dataSource={dataSource}
      setDataSource={setDataSource}
    />
  );

  if (query !== "")
    return (
      <Container>
        <Box mt={4} mb={2}>
          <Logo />
        </Box>
        {searchBar}
        <hr />
        <Suspense fallback={<LazyLoadingFallback />}>
          <SearchResult
            searching={searching}
            result={result}
            error={error}
            query={debouncedQuery}
            dataSource={dataSource}
          />
        </Suspense>
      </Container>
    );

  return (
    <Container maxWidth="sm">
      <Box
        height="100vh"
        display="flex"
        justifyContent="center"
        flexDirection="column"
      >
        <Box mt={-10} mb={3} textAlign="center">
          <Logo variant="h3" />
        </Box>
        {searchBar}
      </Box>
    </Container>
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
