import React, {Component, PropTypes} from 'react';
import RepoListItem from './RepoListItem';
import {getRepos} from '../../../utils/github-api'

export default class Widget extends Component {
  // constructor() {
  //   super()
    // this.state = {repos: []}
  // }

  render() {
    const {list} = this.props
    const {name} = this.props
    return (
   	  <div>
   	      <h3>{name}</h3>
	      <ul className="list-unstyled">
	        {renderRepos(repos)}
	      </ul>
      </div>
    );
  }
}

Widget.propTypes = {
  name: PropTypes.string.isRequired,
  list: PropTypes.json.isRequired,
};

function renderRepos(repos) {
  return repos
    .map(repo => <RepoListItem key={repo.id} repo={repo} />);
}
