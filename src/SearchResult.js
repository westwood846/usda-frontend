import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getReport } from './actions';
import { push } from 'connected-react-router';

class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.handleItemClick = this.handleItemClick.bind(this);
  }
  
  handleItemClick = (event) => {
    this.props.push(`/report/${event.target.value}`);
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
  searching: state.app.searching,
  searchQuery: state.app.searchQuery,
  searchResult: state.app.searchResult ? state.app.searchResult.list : undefined,
  searchError: state.app.searchError
})

const mapDispatchToProps = {
  getReport,
  push
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult)
