import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getReport } from './actions';

class SearchResult extends Component {
  constructor(props) {
    super(props);
  
    this.handleItemClick = this.handleItemClick.bind(this);
  }
  
  handleItemClick = (event) => {
    this.props.getReport(event.target.value);
  }
  
  render() {
    let resultList = !this.searching && this.props.searchResult && (
      <div>
        <div>Result for "{this.props.searchResult.q}" in "{this.props.searchResult.ds}" ():</div>
        <ul>
          {this.props.searchResult.item.map((item, index) => <li key={index}><button onClick={this.handleItemClick} value={item.ndbno}>{item.name}</button></li>)}
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
  getReport
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult)
