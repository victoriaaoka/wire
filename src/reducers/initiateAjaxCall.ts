import * as Action from '../actions/AjaxCallAction';
import * as types from '../types';
import initialState from './initialState';

function actionTypeEndsInSuccess(type) {
    return type.substring(type.length - 8) === '_SUCCESS';
}

export const initiateAjaxCallReducer = (state = initialState.isLoading, action: Action.AjaxCall ) => {
    if (action.type === types.INITIATE_AJAX_CALL) {
        return !state;
    } else if (actionTypeEndsInSuccess) {
        return !state;
    }
};

export default initiateAjaxCallReducer;
