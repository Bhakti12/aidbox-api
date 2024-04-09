import { inject } from "inversify";
import { InternalServerError } from "../errors/InternalServerError";
import { ICarePlanRepository } from "../interfaces/ICarePlanRepository";
import { ICareplan_pathwayService } from "../interfaces/ICareplan_patwayService";
import { careplan_pathway } from "../types/Pathwayscenario";
import { TYPES } from "../config/types";
import { ICareplan_pathwayRepository } from "../interfaces/ICareplan_pathwayRepository";

export default class careplan_pathwayService
  implements ICareplan_pathwayService
{
  private _careplanRepo: ICareplan_pathwayRepository;
  constructor(
    @inject(TYPES.Careplan_pathwayRepository)
    careplan_pathwayRepo: ICareplan_pathwayRepository
  ) {
    this._careplanRepo = careplan_pathwayRepo;
  }
  async addCareplan_pathway(careplanPathway: careplan_pathway): Promise<any> {
    try {
      const result = await this._careplanRepo.addCareplan_pathway(
        careplanPathway
      );
      return result;
    } catch (err) {
      console.log("err", err);
      throw new InternalServerError(
        "An error occurred while interacting with the database"
      );
    }
  }
}
