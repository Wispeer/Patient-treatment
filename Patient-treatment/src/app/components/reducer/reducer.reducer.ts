import { Patients, data } from "../models/patients.model";
import { Procedures } from "../models/procedures.model";
import { ServiceCategoryTypes } from "../models/service-category.model";

export const SAVE_PATIENTS = 'SAVE_PATIENTS';
export const LOAD_PROCDURES = 'LOAD_PROCDURES';
export const LOAD_SERVICE_CATEGORY_TYPES = 'LOAD_SERVICE_CATEGORY_TYPES';

export function loadPatients(state: data[] = [], action: any){
    switch (action.type) {
        case SAVE_PATIENTS: 
            return [...state, action.payload];
        default:
            return state;
    }
}

export function loadProcedures(state: Procedures[] = [], action: any){
    switch (action.type) {
        case LOAD_PROCDURES: 
            return [...state, action.payload];
        default:
            return state;
    }
}

export function loadPServiceCategoryTypes(state: ServiceCategoryTypes[] = [], action: any){
    switch (action.type) {
        case LOAD_SERVICE_CATEGORY_TYPES: 
            return [...state, action.payload];
        default:
            return state;
    }
}