import { careplanDetails } from "../types/Question";

export interface ICarePlanService{
    addCareplanData(careplanData:careplanDetails) : Promise<any>;
    getCareplan(): Promise<any>;
}