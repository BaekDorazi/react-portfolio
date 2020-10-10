import {all, call,fork, put, takeEvery} from 'redux-saga/effects'; 
import Api from 'api'; 
import * as _AT from 'constants/ActionTypes';

import {setAllPheromoneTrapList} from 'actions/PheromoneTrap'; 

export default function* rootSaga() {
     yield all([fork(_getAllPheromoneTrapList)]); 
} 

export function* _getAllPheromoneTrapList() {
     yield takeEvery(_AT.GET_ALL_PHEROMONE_TRAP_LIST, getAllPheromoneTrapList); 
} 

function* getAllPheromoneTrapList({payload}) { 
     let apiCall = async () => {
          return await Api.getAllPheromoneTrapList(payload)
               .then(res => (res.status === 200) ? (res.data) : ({error :res}))
               .catch(error => ({error})); 
          }; 

  let pheromoneTrapList = yield call(apiCall); 
  yield put(setAllPheromoneTrapList(pheromoneTrapList));
}
