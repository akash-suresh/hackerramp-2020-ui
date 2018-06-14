import React, {PropTypes} from 'react';
import moment from 'moment';

export default ReviewItem;

function ReviewItem({row}) {
  return (
    <li className="border-bottom">
        <div className="row">
          <div className="col-sm-2">
          	<strong>&#9734; {row.reviewRating}</strong>
            <img
              src={row.sourceImgUrl}
              className="img-responsive review_image"
              alt="User Avatar"
            />
          </div>
          <div className="col-sm-10">
          	<h4><a href={row.reviewPermaLink}>{row.reviewerName}</a></h4>
            <p>{row.reviewContent.substr(0,250)+"..."}</p>
          </div>
        </div>
      </li>
  );
}

ReviewItem.propTypes = {
  row: PropTypes.object.isRequired
};

ReviewItem.defaultProps = {
  row: {},
};

// id: 1,
// reviewerName: "Rakesh Roshan Rana",
// reviewerThumbnailImgUrl: "",
// reviewRating: 5,
// reviewContent: "1.Software interface (Oxygen OS with almost stock Android experience). 2. Software Update (being in Open beta program, I kept on having updates almost every month), which are in line with customer demand (Community App is another blessing). So Oneplus does listen to Customer.. 3. Product Quality and durability (Hardware), next to none. Most updated hardware that won't be out dated for next 2 years for sure. While many phone makers are still to get such hardware and software update even if releasing after 2 years of my OP3, my earlier devices just rocked. Oneplus 6 is no exception, it is just awesome. 4. The awesome harware and Oxygen OS combined together will give you a mind blowing Android experience. You will simply forget lags, hangs etc..",
// reviewPermaLink: "https://www.amazon.in/product-reviews/B0756Z43QS/ref=acr_dpx_hist_5?ie=UTF8&filterByStar=five_star&showViewpoints=0",
// sourceName: "amazon",
// sourceUrl: "https://www.amazon.in/",
// sourceImgUrl: "https://www.freeiconspng.com/uploads/amazon-icon-6.png",
// timeOfReview: "1 June 2018",
// createdAt: "2018-06-13T14:53:43.000+0000",
// updatedAt: "2018-06-13T14:53:43.000+0000"