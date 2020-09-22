import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../utils/reduxUtils';

const initialState = {
  comments: [],
  filteredComments: [],
  approveComments: false,
  rejectComments: false,
  loadingComments: false,
  errorFetchingComments: false,
};

const setLoadingComments = (state, action) => {
  return updateObject(state, { loadingComments: true });
};

/** FETCH COMMENTS START */
const fetchCommentsFailed = (state, action) => {
  return updateObject(state, {
    loadingComments: false,
    errorFetchingComments: true,
  });
};

const fetchCommentsSuccess = (state, action) => {
  return updateObject(state, {
    comments: action.comments,
    filteredComments: action.comments,
    loadingComments: false,
    errorFetchingComments: false,
  });
};

/** FETCH COMMENTS END */

const approveComments = (state, action) => {
  return updateObject(state, {
    approveComments: true,
  });
};

const rejectComments = (state, action) => {
  return updateObject(state, {
    rejectComments: true,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_COMMENTS_FAILURE:
      return fetchCommentsFailed(state, action);
    case actionTypes.FETCH_COMMENTS_SUCCESS:
      return fetchCommentsSuccess(state, action);
    case actionTypes.APPROVE_COMMENTS:
      return approveComments(state, action);
    case actionTypes.REJECT_COMMENTS:
      return rejectComments(state, action);
    case actionTypes.LOADING_COMMENTS:
      return setLoadingComments(state, action);
    default:
      return state;
  }
};

export default reducer;
