export interface Procedure {
    id: number,
    name: string,
    category: string
}

export interface Procedures {
    procedures: Procedure[]
}

export interface DataProcedures {
    procedures: Procedures[]
}