export interface ServiceCategoryType {
    name: string,
    type: string
}

export interface ServiceCategoryTypes {
    procedures: ServiceCategoryType[]
}

export interface DataServiceCategoryTypes {
    procedures: ServiceCategoryTypes[]
}