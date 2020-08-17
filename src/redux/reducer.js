import { DISHES } from '../Components/data/dishes'
import { COMMENTS } from '../Components/data/comments';
import { LEADERS } from  '../Components/data/leader';
import { PROMOTIONS } from '../Components/data/promotions'; 


export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    leaders: LEADERS,
    promotions: PROMOTIONS
};

export const Reducer = (state = initialState, action) => {
    return state;

};