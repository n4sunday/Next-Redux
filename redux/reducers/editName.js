import {
    EDIT_SUNDAY,
    ADD_NAME
} from '../types';

const sunday = [];

export default (state = sunday, action) => {
    switch (action.type) {
        case EDIT_SUNDAY:
            return '5935512004'
        case ADD_NAME:
            return state.concat([action.name]);
        default:
            return state;
    }
}