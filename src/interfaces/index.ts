import * as types from '../types';
import { Iincidents } from './incident.d';

export interface IStore {
    incidents: Iincidents;
}

export interface IInitateAjaxCall {
    type: types.INITIATE_AJAX_CALL;
}
