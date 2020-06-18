import React, {PropTypes} from 'react';
import moment from 'moment';

export default YouTubeItem;

function YouTubeItem({row}) {
  return (
    <li className="border-bottom">
        <div className="row">
          <div className="col-sm-4">
            <img
              src={row.reviewerThumbnailImgUrl}
              className="img-responsive youtube_image"
              alt="User Avatar"
            />
          </div>
          <div className="col-sm-8">
            <h4 className="reviewTitle"><a href={row.reviewPermaLink}>{row.reviewTitle}</a></h4>
            <strong className="reviewStrong">{row.reviewerName}</strong>
            <p>{row.reviewContent.substr(0,200)+"..."}</p>
            <p style={{color:'#ff9635'}}>{row.timeOfReview}</p>
          </div>
        </div>
      </li>
  );
}

YouTubeItem.propTypes = {
  row: PropTypes.object.isRequired
};

YouTubeItem.defaultProps = {
  row: {},
};
