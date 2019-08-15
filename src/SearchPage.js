import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import SearchResult from './SearchResult';
import SearchBar from './SearchBar';

class SearchPage extends Component {
  static propTypes = {
    // prop: PropTypes
  }

  render() {
    return (
      <div className="SearchPage">
        <h1>SearchPage</h1>
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
