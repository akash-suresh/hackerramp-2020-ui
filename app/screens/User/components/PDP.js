import React, {Component, PropTypes} from 'react';
import Tooltip from 'react-tooltip';
import {getUserData} from '../../../utils/github-api'
import ProfileStat from './ProfileStat'

export default class PDP extends Component {
  render() {
    const {productData} = this.props;
    return (
      <section>
        <div className="row">
          <div className="col-sm-7">
            <img
              src={productData.productLargeImgURL}
              className="img-rounded img-responsive main_image"
              alt="User Avatar"
            />
          </div>
          <div className="col-sm-5">
            <h2>{productData.productName}</h2>
            <h3>{productData.productDescription}</h3>
          </div>
        </div>
      </section>
    );
  }
}

PDP.propTypes = {
  productData: PropTypes.object.isRequired
}
