import {
    INCREASE_NUMBER,
    DECREASE_NUMBER,
    MULCREASE_NUMBER,
} from '../types';

const number = 0;

export default (state = number, action) => {
    switch (action.type) {
        case INCREASE_NUMBER: 
            return state+1;
        case DECREASE_NUMBER: 
            return state-1;
        case MULCREASE_NUMBER:
            return state*2;
        default:
            return state;
    }
}