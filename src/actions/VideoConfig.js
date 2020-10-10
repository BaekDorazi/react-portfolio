import {
  GET_EVENT_VIDEOS,
  SET_EVENT_VIDEOS,
  GET_COMMENTS,
  SET_COMMENTS,
  ADD_COMMENT,
  UPDATE_COMMENT
} from "constants/ActionTypes";

export function getEventVideos(cctvId) {
  return { type: GET_EVENT_VIDEOS, payload: { cctvId } };
}

export function setEventVideos(eventVideos) {
  return { type: SET_EVENT_VIDEOS, payload: { eventVideos } };
}

export function getComments(cctvId, recordId) {
  return { type: GET_COMMENTS, payload: { cctvId, recordId } };
}

export function setComments(comments) {
  return { type: SET_COMMENTS, payload: { comments } };
}

export function addComment(cctvId, recordId, comment) {
  return { type: ADD_COMMENT, payload: { cctvId, recordId, comment } };
}

export function updateComment(cctvId, recordId, comment) {
  return { type: UPDATE_COMMENT, payload: { cctvId, recordId, comment } };
}
