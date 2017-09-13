import { LOAD_CATEGORIES_SUCCESS } from '../types';

export interface IncidentCategory {
    id: number;
    name: string;
    level_name: string;
    level_id: number;
    visible: number;
}

export interface IncidentCategories {
    IncidentCategories: IncidentCategory[];
}

export interface IncidentCategoryAction {
    categories: IncidentCategories;
    type: LOAD_CATEGORIES_SUCCESS;
}
