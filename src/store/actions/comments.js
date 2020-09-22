import * as actionTypes from './actionTypes';

export const fetchComments = () => ({
  type: actionTypes.FETCH_COMMENTS,
});

export const fetchCommentsFailed = () => ({
  type: actionTypes.FETCH_COMMENTS_FAILURE,
});

export const fetchCommentsSuccess = (comments) => ({
  type: actionTypes.FETCH_COMMENTS_SUCCESS,
  comments,
});

export const approveComments = () => ({
  type: actionTypes.APPROVE_COMMENTS,
});

export const rejectComments = () => ({
  type: actionTypes.REJECT_COMMENTS,
});

export const loadingComments = () => ({
  type: actionTypes.LOADING_COMMENTS,
});
