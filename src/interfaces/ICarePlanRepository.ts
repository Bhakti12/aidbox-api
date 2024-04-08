import { careplanDetails } from "../types/Question";

export interface ICarePlanRepository{
    addCareplanData(careplanData:careplanDetails) : Promise<any>;
    getCareplan(): Promise<any>;
}