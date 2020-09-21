import * as api from "../../api/api";
import * as actions from "../actions/index";
import { put, call } from "redux-saga/effects";

export function* fetchCommentsSaga() {
	try {
		yield put(actions.loadingComments());
		const response = yield call(api.fetchComments);
		yield put(actions.fetchCommentsSuccess(response.data));
	} catch (error) {
		yield put(actions.fetchCommentsFailed());
	}
}
