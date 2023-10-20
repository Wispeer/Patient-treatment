import { Patient } from "./patient.model";

export interface Patients {
    patient: Patient[]
}

export interface data {
    data: Patients[]
    // patients: Patients[]
}