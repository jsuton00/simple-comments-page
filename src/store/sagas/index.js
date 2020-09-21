import { fetchCommentsSaga } from "./comments";
import * as actionTypes from "../actions/actionTypes";
import { all, takeEvery } from "redux-saga/effects";

export function* watchComments() {
	yield all([takeEvery(actionTypes.FETCH_COMMENTS, fetchCommentsSaga)]);
}
