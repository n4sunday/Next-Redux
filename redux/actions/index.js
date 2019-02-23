
import {
    INCREASE_NUMBER,
    DECREASE_NUMBER,
    MULCREASE_NUMBER,
    EDIT_SUNDAY,
    ADD_NAME
} from '../types';

export const increaseNumber = () => (dispatch) => {
    dispatch({
        type: INCREASE_NUMBER,
        //value: 1
    })
}

export const decreaseNumber = () => (dispatch) => {
    dispatch({
        type: DECREASE_NUMBER,
        value: 1

    })
}

export const mulcreaseNumber = () => (dispatch) => {
    dispatch({
        type: MULCREASE_NUMBER,
        value: 2
    })
}

export const editSunday = () => (dispatch) => {
    dispatch({
        type: EDIT_SUNDAY,
        value: 1
    })
}
export const addName = (x) => (dispatch) => {
    const name = x
    console.log('foo:'+x )
    console.log('name:'+name)
    dispatch({
        type: ADD_NAME,
        name
    })
}