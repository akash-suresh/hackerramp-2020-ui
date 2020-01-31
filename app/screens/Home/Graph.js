import React, {Component, PropTypes} from 'react';
import {Sigma, RandomizeNodePositions, RelativeSize} from 'react-sigma';

export default class Graph extends Component {
  
  render() {
	  debugger
    return (
      <Sigma graph={this.props.graph} settings={{drawEdges: true, clone: false}}>
        <RelativeSize initialSize={1000}/>
        <RandomizeNodePositions/>
      </Sigma>
    );
  }
}

Graph.propTypes = {
  graph: PropTypes.object.isRequired
}
