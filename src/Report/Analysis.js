import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProximatesChart from './ProximatesChart';

class Analysis extends Component {
  render() {
    return (
      <div className="Analysis">
        <ProximatesChart/>
        <pre><code>{JSON.stringify(this.props.report, null, 2)}</code></pre>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Analysis)
