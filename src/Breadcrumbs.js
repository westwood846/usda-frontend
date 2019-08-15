import React, { Component } from 'react';
import { connect } from 'react-redux';
import { search } from './actions';

class Breadcrumbs extends Component {
  constructor(props) {
    super(props);
  
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick = (event) => this.props.search(event.target.value);

  render() {
    return (
      <div>
        {this.props.name.split(', ').map((fragment, index, fragments) => <button onClick={this.handleClick} key={index} value={fragments.slice(0, index + 1).join(', ')}>{fragment}</button>)}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  name: state.getReportResult ? state.getReportResult.foods[0].food.desc.name : ''
})

const mapDispatchToProps = {
  search
}

export default connect(mapStateToProps, mapDispatchToProps)(Breadcrumbs)
