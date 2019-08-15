import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchResult from './SearchResult';
import SearchBar from './SearchBar';

class SearchPage extends Component {
  render() {
    return (
      <div className="SearchPage">
        <h1>Search USDA API</h1>
        <SearchBar/>
        <SearchResult/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)
