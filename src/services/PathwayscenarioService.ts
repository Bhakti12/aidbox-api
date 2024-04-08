import { inject, injectable } from "inversify";
import { IPathwayscenarioService } from "../interfaces/IPathwayscenarioService";
import { IPathwayscenarioRepository } from "../interfaces/IPathwayscenarioRepository";
import { TYPES } from "../config/types";
import { InternalServerError } from "../errors/InternalServerError";
import { careplan_pathway, formtypes_pathway } from "../types/Pathwayscenario";

@injectable()
export default class PathwayscenarioService implements IPathwayscenarioService {
  private _pathwayRepo: IPathwayscenarioRepository;
  constructor(
    @inject(TYPES.PathwayscenarioRepository)
    pathwayRepo: IPathwayscenarioRepository
  ) {
    this._pathwayRepo = pathwayRepo;
  }
  async addPathway_formtypes(pathwayFormtype: formtypes_pathway): Promise<any> {
    try {
      const result = await this._pathwayRepo.addPathway_formtypes(
        pathwayFormtype
      );
      return result;
    } catch (err) {
      console.log("err", err);
      throw new InternalServerError(
        "An error occurred while interacting with the database"
      );
    }
  }
  async addCareplan_pathway(careplanPathway: careplan_pathway): Promise<any> {
    try {
      const result = await this._pathwayRepo.addCareplan_pathway(
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
  async getFormsOfPatient(): Promise<any> {
    try {
      const result = await this._pathwayRepo.getFormsOfPatient();
      return result;
    } catch (err) {
      console.log("err", err);
      throw new InternalServerError(
        "An error occurred while interacting with the database"
      );
    }
  }
}
