import ApiClient from "util/ApiClient";

const client = new ApiClient();

// /:apiMgrCCTV: == http://dev1705.vivans.net:47100/cctv
// /:apiMgrCCTVBridge == http://dev1705.vivans.net:47100/cctv-bridge

//export const cctvConnect = (cctvId) => client.get(`/:apiMgrCCTV:/cctv/${cctvId}/action/connect`); //CCTV connect 하는 api
export const cctvConnect = (cctvId) => client.get(`/:apiMgrCCTVBridge:/${cctvId}/action/connect`)

export const miniVmsConnect = (cctvId) => client.get(`/:apiMgrCCTVBridge:/${cctvId}/action/minivms/connect`); //miniVms 서버 connect 되어있는지 확인하는 api
export const miniVmsRestart = (cctvId) => client.get(`/:apiMgrCCTVBridge:/${cctvId}/action/minivms/restart`); //miniVms 서버 restart api

// export const cctvPlay = (cctvId) => client.get(`/:apiMgrCCTV:/cctv/${cctvId}/action/play`); //CCTV play 하는 api
export const getEventVideos = (cctvId, startTime, endTime, limit, offset) => client.get(`/:apiMgrCCTV:/cctv/${cctvId}/record?endTime=${endTime}&startTime=${startTime}&limit=${limit}&offset=${offset}`); //이벤트 영상 조회 하는 api
export const eventVideoDetail = (cctvId, recordId) => client.get(`/:apiMgrCCTV:/cctv/${cctvId}/record/${recordId}`); //이벤트 영상 상세보기 하는 api
export const eventVideoCount = (cctvId, startTime, endTime, limit, offset) => client.get(`/:apiMgrCCTV:/cctv/${cctvId}/record/count?endTime=${endTime}&startTime=${startTime}&limit=${limit}&offset=${offset}`); //이벤트 영상 갯수 가지고 오는 api

export const getComments = (cctvId, recordId) => client.get(`/:apiMgrCCTV:/cctv/${cctvId}/record/${recordId}/comment`); //코멘트 조회 하는 api
export const addComment = (cctvId, recordId, comment) => client.post(`/:apiMgrCCTV:/cctv/${cctvId}/record/${recordId}/comment`, { data: comment }); //코멘트 등록 하는 api
export const updateComment = (cctvId, recordId, comment) => client.put(`/:apiMgrCCTV:/cctv/${cctvId}/record/${recordId}/comment`, { data: comment }); //코멘트 수정 하는 api
// export const getThumbnail = (recordId) => client.get(`/:apiMgrCCTV:/snapshot/record/${recordId}`); //썸네일 가지고 오는 api
export const getThumbnail = (recordId) => client.get(`/:apiMgrCCTVBridge:/snapshot/record/${recordId}`);

export const getControllerList = () => client.get(`/:apiMgrEnv:/gsm?all=false&hasCCTV=true`); //CCTV 조회하는 api
// export const cctvPtz = (cctvId, cctvCmd, x, y, zoom) => client.put(`/:apiMgrCCTV:/cctv/${cctvId}/action/ptz/${cctvCmd}?x=${x}&y=${y}&zoom=${zoom}`); //cctv ptz api
export const cctvPtz = (isRtspPlay, isMiniVms, cctvId, cctvCmd, x, y, zoom) => {
    isMiniVms && !isRtspPlay ? 
        client.put(`/:apiMgrCCTVBridge:/${cctvId}/action/ptz/minivms/${cctvCmd}?x=${x}&y=${y}&zoom=${zoom}`) : 
        client.put(`/:apiMgrCCTVBridge:/${cctvId}/action/ptz/${cctvCmd}?x=${x}&y=${y}&zoom=${zoom}`)   
}

