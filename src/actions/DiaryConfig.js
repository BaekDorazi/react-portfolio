import {
  GET_ALL_DIARYS,
  SET_ALL_DIARYS,
  GET_CROPS,
  SET_CROPS,
  GET_WORK_CATEGORIES,
  SET_WORK_CATEGORIES,
  ADD_WORK_MANAGE_DIARY,
  ADD_GROWTH_INFO,
  UPDATE_WORK_MANAGE_DIARY,
  UPDATE_GROWTH_INFO,
  DELETE_WORK_MANAGE_DIARY,
  DELETE_GROWTH_INFO,
  ADD_UPDATE_FILE,
  DELETE_FILE
} from "constants/ActionTypes";
import { GET_IMAGE_DIARY_LIST } from "../constants/ActionTypes";

//작업일지, 경영일지, 생육정보 전체 조회
export function getAllDiarys(gsmKey) {
  return { type: GET_ALL_DIARYS, payload: { gsmKey } };
}

export function setAllDiarys(allDiarys) {
  return { type: SET_ALL_DIARYS, payload: { allDiarys } };
}

//작업일지, 경영일지 전체 조회
export function getAllWorkManageDiarys(ghId) {
  return { type: GET_ALL_WORK_MANAGE_DIARYS, payload: { ghId } };
}

export function setAllWorkManageDiarys(allWorkManageDiarys) {
  return { type: SET_ALL_WORK_MANAGE_DIARYS, payload: { allWorkManageDiarys } };
}

//온실에 해당하는 작물 조회
export function getCrops(ghId) {
  return { type: GET_CROPS, payload: { ghId } };
}

export function setCrops(crops) {
  return { type: SET_CROPS, payload: { crops } };
}

//작업 종류 조회
export function getWorkCategories() {
  return { type: GET_WORK_CATEGORIES };
}

export function setWorkCategories(workCategories) {
  return { type: SET_WORK_CATEGORIES, payload: { workCategories } };
}

//작업일지, 경영일지 등록
export function addWorkManageDiary(workManageDiary) {
  return { type: ADD_WORK_MANAGE_DIARY, payload: { workManageDiary } };
}

//생육정보 등록
export function addGrowthInfo(growthInfo) {
  return { type: ADD_GROWTH_INFO, payload: { growthInfo } };
}

//작업일지, 경영일지 수정
export function updateWorkManageDiary(id, workManageDiary) {
  return { type: UPDATE_WORK_MANAGE_DIARY, payload: { id, workManageDiary } };
}

//생육정보 수정
export function updateGrowthInfo(id, growthInfo) {
  return { type: UPDATE_GROWTH_INFO, payload: { id, growthInfo } };
}

//작업일지, 경영일지 삭제
export function deleteWorkManageDiary(id, ghId) {
  return { type: DELETE_WORK_MANAGE_DIARY, payload: { id, ghId } };
}

//생육정보 삭제
export function deleteGrowthInfo(id, ghId) {
  return { type: DELETE_GROWTH_INFO, payload: { id, ghId } };
}

//영농일지 파일 등록, 수정
export function addUpdateFile(id, contentType) {
  return { type: ADD_UPDATE_FILE, payload: { id, contentType } };
}

//영농일지 파일 삭제
export function deleteFile(id, contentType) {
  return { type: DELETE_FILE, payload: { id, contentType } };
}

//사진일지 사진 리스트 조회
export function getImageDiaryList(id) {
  return { type: GET_IMAGE_DIARY_LIST, payload: { id } };
}
