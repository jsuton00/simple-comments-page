import React, { useState } from 'react';
import { ApproveButton, RejectButton } from './ApprovalButtons';
import { faCheck, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';

export default function Comments(props) {
  const { comment } = props;
  console.log(comment);

  const { id, name, body, email } = comment;

  const [approve, setApprove] = useState(false);
  const [reject, setReject] = useState(false);

  const clickApprove = () => {
    if (reject === true) {
      setReject(false);
      return setApprove(true);
    }
    return setApprove(true);
  };

  const clickReject = () => {
    if (approve === true) {
      setApprove(false);
      return setReject(true);
    }
    return setReject(true);
  };

  const showReviewIcon = () => {
    if (approve) {
      return <FontAwesomeIcon icon={faCheck} size="2x" className="approved" />;
    }
    if (reject) {
      return <FontAwesomeIcon icon={faTimes} size="2x" className="rejected" />;
    }
    return '';
  };

  return (
    <div
      key={id}
      id="comments-row"
      className={`comments-row ${id % 2 !== 0 ? 'primary' : 'secondary'} row`}
    >
      <div className="comment media">
        <div className="comment-user-icon mr-3">
          <FontAwesomeIcon icon={faUser} size="2x" />
        </div>
        <div className="comment-body media-body">
          <h5 className="comment-user row">
            {name}
            <small className="comment-timestamp">
              {moment().calendar().replace(' at ', ', ')}
            </small>
          </h5>
          <p className="comment-email row">
            <a
              href={'mailto:' + email}
              className="comment-email-link"
              aria-label="email-address"
            >
              {email}
            </a>
          </p>
          <p className="comment-text row">{body}</p>
          <div className="comment-review row">
            <ApproveButton clickedApprove={clickApprove} />
            <RejectButton clickedReject={clickReject} />
          </div>
        </div>
        <div className="comment-review-results mr-3">{showReviewIcon()}</div>
      </div>
    </div>
  );
}
