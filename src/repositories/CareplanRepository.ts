import { ICarePlanRepository } from "../interfaces/ICarePlanRepository";
import { careplanDetails } from "../types/Question";

export default class CareplanRepository implements ICarePlanRepository {
  async addCareplanData(careplanData: careplanDetails): Promise<any> {
    try {
        
    } catch (err) {}
  }
  async getCareplan(): Promise<any> {
    try {
    } catch (err) {}
  }
}
