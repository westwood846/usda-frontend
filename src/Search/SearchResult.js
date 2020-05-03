import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { sortBy } from "lodash";
import SearchResultItem from "./SearchResultItem";

class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick = (event) => {
    this.props.push(`/report/${event.target.value}`);
  };

  render() {
    let items = sortBy(this.props.result.list.item, "name");
    let query = this.props.result.list.q;
    let ds = this.props.result.list.ds;
    let start = this.props.result.list.start + 1;
    let end = Number(this.props.result.list.end);
    let total = this.props.result.list.total;

    return (
      <div className="SearchResult">
        <div className="descriptor">
          Result for "{query}" in "{ds}" ({start} to {end} of {total}):
        </div>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <SearchResultItem item={item}></SearchResultItem>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  push,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
