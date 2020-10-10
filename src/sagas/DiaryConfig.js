import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import {
  GET_ALL_DIARYS,
  GET_CROPS,
  GET_WORK_CATEGORIES,
  ADD_WORK_MANAGE_DIARY,
  ADD_GROWTH_INFO,
  UPDATE_WORK_MANAGE_DIARY,
  UPDATE_GROWTH_INFO,
  DELETE_WORK_MANAGE_DIARY,
  DELETE_GROWTH_INFO,
  ADD_UPDATE_FILE,
  DELETE_FILE
} from "constants/ActionTypes";
import { setAllDiarys, setCrops, setWorkCategories } from "actions/DiaryConfig";
import Api from "api";

export default function* rootSage() {
  yield all([
    fork(_getAllDiarys),
    fork(_getCrops),
    fork(_getWorkCategories),
    fork(_addWorkManageDiary),
    fork(_addGrowthInfo),
    fork(_updateWorkManageDiary),
    fork(_updateGrowthInfo),
    fork(_deleteWorkManageDiary),
    fork(_deleteGrowthInfo),
    fork(_addUpdateFile),
    fork(_deleteFile)
  ]);
}

export function* _getAllDiarys() {
  yield takeEvery(GET_ALL_DIARYS, getAllDiarys);
}

export function* _getCrops() {
  yield takeEvery(GET_CROPS, getCrops);
}

export function* _getWorkCategories() {
  yield takeEvery(GET_WORK_CATEGORIES, getWorkCategories);
}

export function* _addWorkManageDiary() {
  yield takeEvery(ADD_WORK_MANAGE_DIARY, addWorkManageDiary);
}

export function* _addGrowthInfo() {
  yield takeEvery(ADD_GROWTH_INFO, addGrowthInfo);
}

export function* _updateWorkManageDiary() {
  yield takeEvery(UPDATE_WORK_MANAGE_DIARY, updateWorkManageDiary);
}

export function* _updateGrowthInfo() {
  yield takeEvery(UPDATE_GROWTH_INFO, updateGrowthInfo);
}

export function* _deleteWorkManageDiary() {
  yield takeEvery(DELETE_WORK_MANAGE_DIARY, deleteWorkManageDiary);
}

export function* _deleteGrowthInfo() {
  yield takeEvery(DELETE_GROWTH_INFO, deleteGrowthInfo);
}

export function* _addUpdateFile() {
  yield takeEvery(ADD_UPDATE_FILE, addUpdateFile);
}

export function* _deleteFile() {
  yield takeEvery(DELETE_FILE, deleteFile);
}

//작업일지, 경영일지, 생육정보 전체 조회
function* getAllDiarys({ payload }) {
  let apiCall = async () => {
    return await Api.getAllDiarys(payload.gsmKey)
      .then(res => {
        return res.data;
      })
      .catch(err => err);
  };
  let diarys = yield call(apiCall);
  yield put(setAllDiarys(diarys));
}

//온실에 해당하는 작물
function* getCrops({ payload }) {
  let apiCall = async () => {
    return await Api.getCrops(payload.ghId)
      .then(res => {
        return res.data;
      })
      .catch(err => err);
  };
  let crops = yield call(apiCall);
  yield put(setCrops(crops));
}

//영농일지 작업종류
function* getWorkCategories() {
  let apiCall = async () => {
    return await Api.getWorkCategories()
      .then(res => {
        return res.data;
      })
      .catch(err => err);
  };
  let categories = yield call(apiCall);
  yield put(setWorkCategories(categories));
}

//작업일지, 경영일지 등록
function* addWorkManageDiary({ payload }) {
  let { workManageDiary } = payload;
  let apiCall = async () => {
    return await Api.addWorkManageDiary(workManageDiary)
      .then(res => res.data)
      .catch(err => err);
  };
  let data = yield call(apiCall);
  yield put({
    type: GET_ALL_DIARYS,
    payload: {
      ghId: data.greenHouseId
    }
  });
}

//생육정보 등록
function* addGrowthInfo({ payload }) {
  let { growthInfo } = payload;
  let apiCall = async () => {
    return await Api.addGrowthInfo(growthInfo)
      .then(res => res.data)
      .catch(err => err);
  };
  let data = yield call(apiCall);
  yield put({
    type: GET_ALL_DIARYS,
    payload: {
      ghId: data.greenHouseId
    }
  });
}

//작업일지, 경영일지 수정
function* updateWorkManageDiary({ payload }) {
  let { workManageDiary } = payload;
  let apiCall = async () => {
    return await Api.updateWorkManageDiary(payload.id, workManageDiary)
      .then(res => res.data)
      .catch(err => err);
  };
  let data = yield call(apiCall);
  yield put({
    type: GET_ALL_DIARYS,
    payload: {
      ghId: data.greenHouseId
    }
  });
}

//생육정보 수정
function* updateGrowthInfo({ payload }) {
  let { growthInfo } = payload;
  let apiCall = async () => {
    return await Api.updateGrowthInfo(payload.id, growthInfo)
      .then(res => res.data)
      .catch(err => err);
  };
  let data = yield call(apiCall);
  yield put({
    type: GET_ALL_DIARYS,
    payload: {
      ghId: data.greenHouseId
    }
  });
}

//작업일지, 경영일지 삭제
function* deleteWorkManageDiary({ payload }) {
  let apiCall = async () => {
    return await Api.deleteWorkManageDiary(payload.id)
      .then(res => res.data)
      .catch(err => err);
  };

  yield call(apiCall);
  yield put({
    type: GET_ALL_DIARYS,
    payload: {
      ghId: payload.ghId
    }
  });
}

//생육정보 삭제
function* deleteGrowthInfo({ payload }) {
  let apiCall = async () => {
    return await Api.deleteGrowthInfo(payload.id)
      .then(res => res.data)
      .catch(err => err);
  };

  yield call(apiCall);
  yield put({
    type: GET_ALL_DIARYS,
    payload: {
      ghId: payload.ghId
    }
  });
}

//영농일지 파일 등록, 수정
function* addUpdateFile({ payload }) {
  async () => {
    return await Api.addUpdateFile(payload.id, payload.contentType)
      .then(res => res.data)
      .catch(err => err);
  };
}

//영농일지 파일 삭제
function* deleteFile({ payload }) {
  async () => {
    return await Api.deleteFile(payload.id, payload.contentType)
      .then(res => res.data)
      .catch(err => err);
  };
}
