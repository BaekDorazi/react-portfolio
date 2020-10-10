import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import {
  GET_EVENT_VIDEOS,
  GET_COMMENTS,
  ADD_COMMENT,
  UPDATE_COMMENT
} from "constants/ActionTypes";
import { setEventVideos, setComments } from "actions/VideoConfig";
import Api from "api";
import { __await } from "tslib";

export default function* rootSage() {
  yield all([
    fork(_getEventVideos),
    fork(_getComments),
    fork(_addComment),
    fork(_updateComment)
  ]);
}

export function* _getEventVideos() {
  yield takeEvery(GET_EVENT_VIDEOS, getEventVideos);
}

export function* _getComments() {
  yield takeEvery(GET_COMMENTS, getComments);
}

export function* _addComment() {
  yield takeEvery(ADD_COMMENT, addComment);
}

export function* _updateComment() {
  yield takeEvery(UPDATE_COMMENT, updateComment);
}

function* getEventVideos({ payload }) {
  let apiCall = async () => {
    return await Api.getEventVideos(payload.cctvId)
      .then(res => {
        return res.data;
      })
      .catch(err => err);
  };
  let eventVideos = yield call(apiCall);
  yield put(setEventVideos(eventVideos));
}

function* getComments({ payload }) {
  let apiCall = async () => {
    return await Api.getComments(payload.cctvId, payload.recordId)
      .then(res => {
        return res.data;
      })
      .catch(err => err);
  };
  let comments = yield call(apiCall);
  yield put(setComments(comments));
}

function* addComment({ payload }) {
  let apiCall = async () => {
    return await Api.addComment(
      payload.cctvId,
      payload.recordId,
      payload.comment
    )
      .then(res => res.data)
      .catch(err => err);
  };
  let data = yield call(apiCall);
  yield put({
    type: GET_COMMENTS,
    payload: {
      cctvId: data.cctvId,
      recordId: data.recordId
    }
  });
}

function* updateComment({ payload }) {
  let apiCall = async () => {
    return await Api.updateComment(
      payload.cctvId,
      payload.recordId,
      payload.comment
    )
      .then(res => res.data)
      .catch(err => err);
  };
  let data = yield call(apiCall);
  yield put({
    type: GET_COMMENTS,
    payload: {
      cctvId: data.cctvId,
      recordId: data.recordId
    }
  });
}
