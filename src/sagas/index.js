import { all } from "redux-saga/effects";
import DiaryConfigSagas from "./DiaryConfig";
import VideoConfigSagas from "./VideoConfig";
import PheromoneTrapSagas from "./PheromoneTrap";

export default function* rootSaga(getState) {
  yield all([DiaryConfigSagas(), VideoConfigSagas(), PheromoneTrapSagas()]);
}
