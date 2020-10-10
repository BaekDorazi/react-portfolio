import { SET_EVENT_VIDEOS, SET_COMMENTS } from "constants/ActionTypes";

const initialState = {
  eventVideos: [],
  comments: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_EVENT_VIDEOS:
      return {
        ...state,
        eventVideos: action.payload.eventVideos
      };
    case SET_COMMENTS:
      return { ...state, comments: action.payload.comments };
    default:
      return { ...state };
  }
};
