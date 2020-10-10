import * as _AT from 'constants/ActionTypes'; 

export const setPheromoneTrapState = data => ({
     type : _AT.SET_PHEROMONE_TRAP_STATE, 
     payload : data
}); 

export const getAllPheromoneTrapList = (gsmKey) => ({
     type : _AT.GET_ALL_PHEROMONE_TRAP_LIST,
     payload : gsmKey
}); 

export const setAllPheromoneTrapList = list => ({
     type : _AT.SET_ALL_PHEROMONE_TRAP_LIST,  
     payload : list 
}); 