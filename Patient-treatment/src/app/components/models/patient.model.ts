import { Procedures } from "./procedures.model"

export interface Patient{
    id: number,
    name: string,
    gender: string
}

export interface PatientCard {
    patient: Patient[],
    procedures: Procedures[],
}