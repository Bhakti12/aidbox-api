import { IFormtypesService } from "../interfaces/IFormtypesService";
import { formtypesDetails } from "../types/Question";

export default class formtypeService implements IFormtypesService{
    addFormTypeData(formType: formtypesDetails): Promise<any> {
        throw new Error("Method not implemented.");
    }
    getFormType(): Promise<any> {
        throw new Error("Method not implemented.");
    }
    
}