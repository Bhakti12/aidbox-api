import { formtypesDetails } from "../types/Question";

export interface IFormtypesService{
    addFormTypeData(formType:formtypesDetails) : Promise<any>;
    getFormType(): Promise<any>;
}