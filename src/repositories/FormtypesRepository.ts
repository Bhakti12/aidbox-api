import { IFormtypesRepository } from "../interfaces/IFormtypesRepository";
import { formtypesDetails } from "../types/Question";

export default class Formtypes implements IFormtypesRepository{
    addFormTypeData(formType: formtypesDetails): Promise<any> {
        throw new Error("Method not implemented.");
    }
    getFormType(): Promise<any> {
        throw new Error("Method not implemented.");
    }
    
}