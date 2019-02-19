import { combineReducers } from 'redux';
import numberReducer from './numberReducer';

export default combineReducers({
    //number: () => 0
    number: numberReducer
});