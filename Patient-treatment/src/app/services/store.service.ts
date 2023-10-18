import { Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { AppState } from "../app.state";
import { Injectable } from "@angular/core";
import postJsonPatients from 'src/assets/patients.json'
import postJsonProcedure from 'src/assets/procedures.json'
import postJsonServiceCategory from 'src/assets/service-category.json'
import { DataPatients, Patients } from "../components/models/patients.model";
import { DataProcedures, Procedure } from "../components/models/procedures.model";
import { DataServiceCategoryTypes, ServiceCategoryTypes } from "../components/models/service-category.model";
import { LOAD_PATIENTS, LOAD_PROCDURES, LOAD_SERVICE_CATEGORY_TYPES } from "../components/reducer/reducer.reducer";


Injectable({
    providedIn: 'root'
})

export class StoreService {

    postPatients: DataPatients = postJsonPatients;
    postProcedures: DataProcedures = postJsonProcedure;
    postServiceCategoryTypes: DataServiceCategoryTypes = postJsonServiceCategory;

    patients: Observable<Patients[]> | any;
    procedures: Observable<Procedure[]> | any;
    serviceCategoryTypes: Observable<ServiceCategoryTypes> | any;

    constructor(private store: Store<AppState>){
        this.patients = this.store.select(state => state.patients);
        this.procedures = this.store.select(state => state.procedures);
        this.serviceCategoryTypes = this.store.select(state => state.serviceCategory)
    }

    ngOnInit(): void {}

    getAllPatients() {
        this.store.dispatch({type: LOAD_PATIENTS, payload: this.postPatients});
        return of (this.postPatients)
    }

    getAllProcedures() {
        this.store.dispatch({type: LOAD_PROCDURES, payload: this.postProcedures});
        return of (this.postProcedures)
    }

    getAllServiceCategoryTypes() {
        this.store.dispatch({type: LOAD_SERVICE_CATEGORY_TYPES, payload: this.postServiceCategoryTypes})
    }
}