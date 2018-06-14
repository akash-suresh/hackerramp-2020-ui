import React, {Component, PropTypes} from 'react';
import Profile from './components/Profile'
import RepoFilter from './components/RepoFilter'
import RepoList from './components/RepoList'
import PDP from './components/PDP'
//import Widget from './components/Widget'

import {getProductData} from '../../utils/critico-api'

export default class User extends Component {
  constructor() {
    super()
    this.state = {productData: {}}
  }

  getProductData() {
    const {username} = this.props
    this.props.getProductData(username).then(productData => {
      this.setState({productData});
    });
  }

  componentWillMount() {
    this.getProductData();
  }

  handleFilterUpdate = () => {
    //sfsf
  }

  render() {
    const {username} = this.props.params
    const {productData} = this.state
    // var name = this.
    var list = [1,2,3,4,5]
    return (
      <div className="container">
        <section className="user border-bottom">
          <div className="row">
            <div className="col-sm-9">
              <h3 className="The-Reviewer">The Reviewer</h3>
            </div>
            <div className="col-sm-3">
              <RepoFilter onUpdate={this.handleFilterUpdate} />
            </div>
          </div>
        </section>

        <div className="row">
          <PDP productData={productData}/>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <RepoList filter={"abcd"} username={username}/>
          </div>
          <div className="col-sm-6">
          </div>
        </div>
      </div>
    );
  }
}

User.propTypes = {
  params: PropTypes.shape({
    username: PropTypes.string,
  }),
  getProductData: PropTypes.func,
}

User.defaultProps = {getProductData}
