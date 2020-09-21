import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import React from 'react';

export default function Comments(props) {
  const { comment } = props;
  console.log(comment);

  const { id, name, body, email } = comment;

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
        </div>
      </div>
    </div>
  );
}
