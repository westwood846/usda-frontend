import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchResult from './SearchResult';
import SearchBar from './SearchBar';
import { search } from './actions';

class SearchPage extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.match);
    let urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has('query')) {
      this.props.search(urlParams.get('query'));
    } else {
      this.props.search('');
    }
  }
  

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
  search
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)
