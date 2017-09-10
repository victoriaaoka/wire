import * as interfaces from '../interfaces';
import * as types from '../types';

export type AjaxCall = interfaces.IInitateAjaxCall;

export const initiateAjaxCall = () => {
    return { type: types.INITIATE_AJAX_CALL };
};
