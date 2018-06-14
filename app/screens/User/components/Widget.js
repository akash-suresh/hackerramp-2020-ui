import React, {Component, PropTypes} from 'react';
import RepoListItem from './RepoListItem';
import YouTubeItem from './YouTubeItem';
import ReviewItem from './ReviewItem';
import {getRepos} from '../../../utils/github-api'

export default class Widget extends Component {
  // constructor() {
  //   super()
    // this.state = {repos: []}
  // }

  render() {
    const {list} = this.props;
    const {name} = this.props;
    debugger
    return (
   	  <div>
   	    <h3>{name}</h3>
        <ul className="list-unstyled">
          {renderRepos(list, name)}
        </ul>
      </div>
    );
  }
}

Widget.propTypes = {
  name: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
};

function renderRepos(list, name) {
  if(list){
    switch(name){
      case "YouTube":
        return list
          .map(row => <YouTubeItem row={row} />);  
      case "Reviews":
        return list
          .map(row=> <ReviewItem row={row}/>);
    }
  }
  return
}
