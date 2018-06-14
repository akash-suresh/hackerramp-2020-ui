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
            <h4><a href={row.reviewPermaLink}>{row.reviewContent}</a></h4>
            <strong>&#9734; {row.reviewerName}</strong>
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
