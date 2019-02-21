import { combineReducers } from 'redux';
import numberReducer from './numberReducer';
import editName from './editName';

export default combineReducers({
    //number: () => 0
    number: numberReducer,
    sunday: editName
});