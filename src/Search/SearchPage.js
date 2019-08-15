import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchResult from './SearchResult';
import SearchBar from './SearchBar';
import { setQuery, search } from '../actions';

class SearchPage extends Component {
  constructor(props) {
    super(props);
    let urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('dataSource')) {
      this.props.setQuery(urlParams.get('dataSource' || 'BOTH'));
    }
    if (urlParams.has('query')) {
      this.props.setQuery(urlParams.get('query'));
      this.props.search();
    } else {
      this.props.setQuery('');
    }
  }
  

  render() {
    let result = this.props.searching
      ? <span>Searching for "{this.props.query}"...</span>
      : this.props.error
        ? <pre><code>{JSON.stringify(this.props.error, null, 2)}</code></pre>
        : this.props.result
          ? <SearchResult result={this.props.result}/>
          : null

    return (
      <div className="SearchPage">
        <h1>Search USDA API</h1>
        <SearchBar/>
        {result}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  searching: state.app.searching,
  query: state.app.searchQuery,
  result: state.app.searchResult,
  // items: get(state.app.searchResult, 'list.item'),
  error: state.app.searchError
})

const mapDispatchToProps = {
  setQuery,
  search
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)
