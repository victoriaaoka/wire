import axios from 'axios';
import { LOAD_CATEGORIES_SUCCESS } from '../types';
import { initiateAjaxCall } from './AjaxCallAction';

export const loadIncidentCategorySuccess = (categories) => {
    return { type: LOAD_CATEGORIES_SUCCESS, categories };
};

export const loadIncidentCategories = () => {
    return ((dispatch: any) => {
        dispatch(initiateAjaxCall());
        return axios.get('http://app.nairobi.us/wire/api/categories')
            .then((categoriesResp: any) => {
                dispatch(loadIncidentCategorySuccess(categoriesResp.data));
            })
            .catch((error) => {
                console.log(error);
            });
    });
};
