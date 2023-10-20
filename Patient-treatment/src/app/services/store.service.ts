import { Store } from "@ngrx/store";
import { Observable, of } from "rxjs";
import { AppState } from "../app.state";
import { Injectable, OnInit } from "@angular/core";
import postJsonPatients from 'src/assets/patients.json'
import postJsonProcedure from 'src/assets/procedures.json'
import postJsonServiceCategory from 'src/assets/service-category-types.json'
import { data } from "../components/models/patients.model";
import { DataProcedures, Procedure } from "../components/models/procedures.model";
import { DataServiceCategoryTypes, ServiceCategoryTypes } from "../components/models/service-category.model";
import { LOAD_PROCDURES, LOAD_SERVICE_CATEGORY_TYPES, SAVE_PATIENTS } from "../components/reducer/reducer.reducer";


@Injectable({
    providedIn: 'root'
})

export class StoreService implements OnInit {

    postPatients: data = postJsonPatients;
    postProcedures: DataProcedures = postJsonProcedure;
    postServiceCategoryTypes: DataServiceCategoryTypes = postJsonServiceCategory;

    patients: Observable<data[]> | any;
    procedures: Observable<Procedure[]> | any;
    serviceCategoryTypes: Observable<ServiceCategoryTypes> | any;

    constructor(private store: Store<AppState>){
        this.patients = this.store.select(state => state.data);
        this.procedures = this.store.select(state => state.procedures);
        this.serviceCategoryTypes = this.store.select(state => state.serviceCategory);
    }

    ngOnInit(): void {
        console.log('postPatients', this.postPatients);
        console.log('patients', this.patients);
    }

    getAllPatients() {
        this.store.dispatch({type: SAVE_PATIENTS, payload: this.postPatients.data});
        console.log('postPatients.data', this.postPatients.data);
        return of (this.postPatients.data)
    }

    getAllProcedures() {
        this.store.dispatch({type: LOAD_PROCDURES, payload: this.postProcedures.procedures});
        return of (this.postProcedures)
    }

    getAllServiceCategoryTypes() {
        this.store.dispatch({type: LOAD_SERVICE_CATEGORY_TYPES, payload: this.postServiceCategoryTypes.procedures});
        return of (this.postServiceCategoryTypes.procedures)
    }
}