import { ICarePlanService } from "../interfaces/ICarePlanService";
import { careplanDetails } from "../types/Question";

export default class CareplanService implements ICarePlanService{
    addCareplanData(careplanData: careplanDetails): Promise<any> {
        throw new Error("Method not implemented.");
    }
    getCareplan(): Promise<any> {
        throw new Error("Method not implemented.");
    }
    
}