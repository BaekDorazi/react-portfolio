import ApiClient from "util/ApiClient";

const client = new ApiClient();

// /:apiMgrDiary: == http://dev1705.vivans.net:47100/env/houseDiary
// export const getAllDiarys = gsmKey => client.get(`/:apiMgrDiary:/list?gsmKey=${gsmKey}`); //gsmkey로 전체 영농일지 조회 api
export const getAllDiarys = houseId => client.get(`/:apiMgrDiary:/list/${houseId}`); //houseId로 전체 영농일지 조회 api
export const getCrops = (houseId) => client.get(`/:apiMgrDiary:/cropsInfo/${houseId}`); //작물 정보 가지고 오는 api
export const getWorkCategories = () => client.get("/:apiMgrDiary:/categoryList"); //영농일지 - 작업일지, 경영일지 등록할 때 나오는 종류 가지고 오는 api 
export const addWorkManageDiary = (workManageDiary) => client.post("/:apiMgrDiary:/", { data: workManageDiary }); //영농일지 - 작업일지, 경영일지 등록 api
export const addGrowthInfo = (growthInfo) => client.post("/:apiMgrDiary:/cropsDiary", { data: growthInfo }); //영농일지 - 생육정보 등록 api
export const updateWorkManageDiary = (id, workManageDiary) => client.put(`/:apiMgrDiary:/${id}`, { data: workManageDiary }); //영농일지 - 작업일지, 경영일지 수정 api
export const updateGrowthInfo = (id, growthInfo) => client.put(`/:apiMgrDiary:/cropsDiary/${id}`, { data: growthInfo }); //영농일지 - 생육정보 수정 api
export const deleteWorkManageDiary = (id) => client.del(`/:apiMgrDiary:/${id}`); //영농일지 - 작업일지, 경영일지 삭제하는 api
export const deleteGrowthInfo = (id) => client.del(`/:apiMgrDiary:/cropsDiary/${id}`); //영농일지 - 생육정보 삭제하는 api
export const getWorkManageDetails = (id) => client.get(`/:apiMgrDiary:/${id}`); //작업일지, 경영일지 상세보기 api
export const getGrowthDetails = (id) => client.get(`/:apiMgrDiary:/cropsDiary/${id}`); //생육정보 상세보기 api
export const addUpdateFile = (id,  files) => client.post(`/:apiMgrDiary:/diaryFile?id=${id}`, { data: files }); //작업일지, 경영일지, 생육정보 파일 등록, 수정하는 api
export const deleteFile = (id, fileIdIdx) => client.del(`/:apiMgrDiary:/diaryFile?id=${id}`, { data: fileIdIdx }); //작업일지, 경영일지, 생육정보 파일 삭제하는 api
export const getImageDiaryList = (houseId) => client.get(`/:apiMgrDiary:/imageDiary/${houseId}`); //사진일지 목록 조회하는 api
export const getImageDiaryList1 = (gsmKey, houseId, fromDate, toDate, size, page) => client.get(`/:apiMgrDiary:/imageDiary/v2/`, { params: { gsmKey, houseId, fromDate, toDate, size, page }}); //사진일지 조회 api
export const getImageDiaryTotal = (gsmKey, houseId, fromDate, toDate) => client.get(`/:apiMgrDiary:/imageDiary/v2/totalCount`, { params: { gsmKey, houseId, fromDate, toDate }}); //사진일지 조회 total 갯수
export const getDiaryPropertyList = (gsmKey, houseId, userIdx) => client.get(`/env/diary_type`, { params: { gsmKey, houseId, userIdx }}); //영농일지 작성할때 등록 항목 가지고 오는 api
