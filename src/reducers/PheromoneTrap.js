import update from 'react-addons-update'; 
import * as _AT from 'constants/ActionTypes';


const initialSettings = {
     allPheromoneTrapList: [],
     pheromoneTrapState: {}
   };
   
   const pheromoneTrap = (state = initialSettings, action) => { 
    switch (action.type) {
       case _AT.SET_PHEROMONE_TRAP_STATE: {
         return update(state, {
           pheromoneTrapState: { $set: action.payload }
         });
       }
       case _AT.SET_ALL_PHEROMONE_TRAP_LIST: { 
         return update(state, {
           allPheromoneTrapList: { $set: action.payload.lists }
         });
       }
   
       default:
         return {...state};
     }
   };
   
   export default pheromoneTrap;
   