import React, { Component } from 'react'
import { connect } from 'react-redux'

class Analysis extends Component {
  render() {
    return (
      <div className="Analysis">
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
