import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import DiaryConfig from "./DiaryConfig";
import VideoConfig from "./VideoConfig";
import PheromoneTrap from "./PheromoneTrap";

const reducers = combineReducers({
  routing: routerReducer,
  diaryConfig: DiaryConfig,
  videoConfig: VideoConfig,
  pheromoneTrap: PheromoneTrap,
});

export default reducers;
