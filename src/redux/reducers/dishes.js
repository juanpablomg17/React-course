import * as ActionTypes from '../actions/ActionTypes';

export const Dishes = (state = {
    isLoading: true, 
    errMess: null,
    dishes: []
}, action) => {
    switch(action.type) {
        case ActionTypes.ADD_DISHES:


        case ActionTypes.DISHES_LOADING:
            return {...state, isLoading: true}


        case ActionTypes.DISHES_FAILED:


        default: 
            return state; 
    }
}