import React, {Component, PropTypes} from 'react';
import Profile from './components/Profile'
import RepoFilter from './components/RepoFilter'
import RepoList from './components/RepoList'
import PDP from './components/PDP'
import Widget from './components/Widget'

import {getProductData} from '../../utils/critico-api'

export default class User extends Component {
  constructor() {
    super()
    this.state = {productData: {}}
  }

  getProductData() {
    debugger
    const {username} = this.props.params
    this.props.getProductData(username).then(productData => {
      debugger
      this.setState({productData});
    });
  }

  componentDidMount() {
    this.getProductData();
  }

  handleFilterUpdate = () => {
    //sfsf
  }

  render() {
    const {username} = this.props.params
    const {productData} = this.state
    return (
      <div className="container">
        <section className="user border-bottom">
          <div className="row">
            <div className="col-sm-9">
              <h3 className="The-Reviewer">Critico</h3>
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
            <Widget list={productData.userReviews} displayName={"Verified User Reviews"} rowName={"Reviews"}/>
          </div>
          <div className="col-sm-6">
            <Widget list={productData.videoReviews} displayName={"YouTube"} rowName={"YouTube"} />
          </div>
        </div>
      </div>
    );
  }
}

User.propTypes = {
  params: PropTypes.object,
  getProductData: PropTypes.func,
}

User.defaultProps = {getProductData}
