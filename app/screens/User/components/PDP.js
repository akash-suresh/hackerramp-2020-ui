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
          <div className="col-sm-6">
            <img
              src={productData.productLargeImgURL}
              className="img-rounded img-responsive main_image"
              alt="User Avatar"
            />
          </div>
          <div className="col-sm-6">
            <h2 style={{color: "#7703da"}}>{productData.productName}</h2>
            <p style={{fontSize: "18px"}}>{productData.productDescription}</p>
          </div>
        </div>
      </section>
    );
  }
}

PDP.propTypes = {
  productData: PropTypes.object.isRequired
}
