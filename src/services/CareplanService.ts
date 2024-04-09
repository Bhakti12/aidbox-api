import { inject } from "inversify";
import { TYPES } from "../config/types";
import { ICarePlanRepository } from "../interfaces/ICarePlanRepository";
import { ICarePlanService } from "../interfaces/ICarePlanService";
import { careplanDetails } from "../types/Question";
import { InternalServerError } from "../errors/InternalServerError";

export default class CareplanService implements ICarePlanService {
  private _careplanRepo: ICarePlanRepository;

  constructor(
    @inject(TYPES.CarePlanRepository)
    careplanRepo: ICarePlanRepository
  ) {
    this._careplanRepo = careplanRepo;
  }
  async addCareplanData(careplan: careplanDetails): Promise<any> {
    try {
      const result = await this._careplanRepo.addCareplanData(careplan);
      return result;
    } catch (err: any) {
      console.log("err", err);
      throw new InternalServerError(
        "An error occurred while interacting with the database"
      );
    }
  }
  async getCareplan(): Promise<any> {
    try {
      const result = await this._careplanRepo.getCareplan();
      return result;
    } catch (err: any) {
      console.log("err", err);
      throw new InternalServerError(
        "An error occurred while interacting with the database"
      );
    }
  }
}
