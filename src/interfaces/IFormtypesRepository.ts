import { formtypesDetails } from "../types/Question";

export interface IFormtypesRepository{
    addFormTypeData(formType:formtypesDetails) : Promise<any>;
    getFormType(): Promise<any>;
}