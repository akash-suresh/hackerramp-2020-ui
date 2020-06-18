import React, {Component, PropTypes} from 'react';
import Profile from './components/Profile'
import RepoFilter from './components/RepoFilter'
import RepoList from './components/RepoList'
import PDP from './components/PDP'
import Widget from './components/Widget'
import TwitterWidget from './components/TwitterWidget'
import {getProductData} from '../../utils/critico-api'

export default class User extends Component {
  constructor() {
    super()
    this.state = {productData: {}}
  }

  getProductData() {
    const {username} = this.props.params
    this.props.getProductData(username).then(productData => {
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
              
            </div>
          </div>
        </section>

        <div className="row border-bottom">
          <PDP productData={productData}/>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <TwitterWidget username={username} list={productData.socialReviews} displayName={"Social Signals"} rowName={"Twitter"} />
          </div>
          <div className="col-sm-4">
            <Widget list={productData.videoReviews} displayName={"Video Reviews"} rowName={"YouTube"} />
          </div>
          <div className="col-sm-4">
            <Widget list={productData.userReviews} displayName={"User Reviews"} rowName={"Reviews"}/>
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
