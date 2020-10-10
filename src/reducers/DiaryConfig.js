import * as _AT from "constants/ActionTypes";

const initialState = {
  allDiarys: [],
  crops: "",
  workCategories: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case _AT.SET_ALL_DIARYS:
      return {
        ...state,
        allDiarys: action.payload.allDiarys
      };
    case _AT.SET_CROPS:
      return {
        ...state,
        crops: action.payload.crops
      };
    case _AT.SET_WORK_CATEGORIES:
      return {
        ...state,
        workCategories: action.payload.workCategories
      };
    default:
      return { ...state };
  }
};
