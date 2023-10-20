import { Patient, PatientCard } from "./components/models/patient.model";
import { Patients, data } from "./components/models/patients.model";
import { Procedure, Procedures } from "./components/models/procedures.model";
import { ServiceCategoryTypes, ServiceCategoryType } from "./components/models/service-category.model";

export interface AppState {
    data: data;
    patient: Patient;
    patients: Patients[];
    patientCard: PatientCard;
    procedure: Procedure;
    procedures: Procedures[];
    serviceCategory: ServiceCategoryType;
    serviceCategories: ServiceCategoryTypes[];
}