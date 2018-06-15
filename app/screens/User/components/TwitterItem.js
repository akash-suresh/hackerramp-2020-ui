import React, {PropTypes} from 'react';
import moment from 'moment';

export default TwitterItem;

function TwitterItem({row}) {
  return (
    <li className="border-bottom">
        <div className="row">
          <div className="col-sm-2">
            <img
              src={row.reviewerThumbnailImgUrl}
              className="img-responsive img-rounded twitterDP"
              alt="User Avatar"
            />
          </div>
          <div className="col-sm-10">
          	<h4><a href={row.reviewPermaLink}>{row.reviewerName}</a></h4>
            <p>{row.reviewContent}</p>
            <p style={{color:'#ff9635'}}>{row.timeOfReview}</p>
          </div>
        </div>
      </li>
  );
}

TwitterItem.propTypes = {
  row: PropTypes.object.isRequired
};

TwitterItem.defaultProps = {
  row: {},
};

// {
// id: 5,
// reviewerName: "akashsuresh96",
// reviewerThumbnailImgUrl: "http://pbs.twimg.com/profile_images/846258497142505472/mH1nKn8r_normal.jpg",
// reviewRating: 0,
// reviewTitle: null,
// reviewContent: "#oneplus6 https://t.co/QvKaVSgwVA",
// reviewPermaLink: null,
// sourceName: "Twitter",
// sourceUrl: null,
// sourceImgUrl: null,
// timeOfReview: null,
// productId: 1,
// createdAt: "2018-06-15T06:42:19.000+0000",
// updatedAt: "2018-06-15T06:42:19.000+0000"
// },