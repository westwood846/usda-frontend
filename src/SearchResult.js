import React, { Component } from 'react'
import { connect } from 'react-redux'

class SearchResult extends Component {
  render() {
    let resultList = !this.searching && this.props.searchResult && (
      <div>
        <div>Result for "{this.props.searchResult.q}" in "{this.props.searchResult.ds}" ():</div>
        <ul>
          {this.props.searchResult.item.map((item, index) => <li key={index}>{item.name}</li>)}
        </ul>
        <pre><code>{JSON.stringify(this.props.searchResult)}</code></pre>
      </div>
    );

    return (
      <div className="SearchResult">
        <h3>Results</h3>
        {this.props.searching && <span>Searching for "{this.props.searchQuery}"...</span>}
        {this.props.searchError && <span>Error: "{JSON.stringify(this.props.searchError)}"</span>}
        {resultList}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  searching: state.searching,
  searchQuery: state.searchQuery,
  searchResult: state.searchResult ? state.searchResult.list : undefined,
  searchError: state.searchError
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult)
