import ApiClient from "util/ApiClient";

const client = new ApiClient();

//지역의 모든 페로몬트랩 해충 포획수 리스트
export const getAllPheromoneTrapList = (gsmKey) =>
  client.get(`/:apiPheromone:/capture/captures/gsm/${gsmKey}`);

//온실의 해출 별 농가평균 및 지역평균 채집수, 위험도 조회
export const getPheromoneTrapAnalysis = (gsmKey, houseId, pestKind) =>
  client.get(
    `/:apiPheromone:/capture/analysis/gsm/${gsmKey}/house/${houseId}/pest/${pestKind}`
  );


export const getGraphData = (houseId, pestKind) =>
  client.get(`/:apiPheromone:/graph/house/${houseId}/pest/${pestKind}`); 

//페로몬트랩 촬영사진 리스트 총 갯수 조회
export const getImageCount = (houseId, pestKind, params) =>
  client.get(
    `/:apiPheromone:/capture/captures/count/house/${houseId}/pest/${pestKind}`,
    { params }
  );

//페로몬트랩 촬영사진 리스트 조회
export const getImageList = (houseId, pestKind, params) =>
  client.get(`/:apiPheromone:/capture/captures/house/${houseId}/pest/${pestKind}`, {
    params,
  });

//페로몬트랩 촬영 사진 가져오기
export const getImage = (trapCaptureId) =>
  client.get(`/:apiPheromone:/capture/snapshot/${trapCaptureId}`);
