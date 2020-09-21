import * as actionTypes from "./actionTypes";

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

export const loadingComments = () => ({
	type: actionTypes.LOADING_COMMENTS,
});
