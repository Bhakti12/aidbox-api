import { inject, injectable } from "inversify";
import { IPathwayscenarioService } from "../interfaces/IPathwayscenarioService";
import { IPathwayscenarioRepository } from "../interfaces/IPathwayscenarioRepository";
import { TYPES } from "../config/types";
import { InternalServerError } from "../errors/InternalServerError";

@injectable()
export default class PathwayscenarioService implements IPathwayscenarioService {
  private _pathwayRepo: IPathwayscenarioRepository;
  constructor(
    @inject(TYPES.PathwayscenarioRepository)
    pathwayRepo: IPathwayscenarioRepository
  ) {
    this._pathwayRepo = pathwayRepo;
  }
  async addPathway_formtypes(): Promise<any> {
    try {

    } catch (err) {
      console.log("err", err);
      throw new InternalServerError(
        "An error occurred while interacting with the database"
      );
    }
  }
  async addCareplan_pathway(): Promise<any> {
    try {

    } catch (err) {
      console.log("err", err);
      throw new InternalServerError(
        "An error occurred while interacting with the database"
      );
    }
  }
  async getFormsOfPatient(): Promise<any> {
    try {
        
    } catch (err) {
      console.log("err", err);
      throw new InternalServerError(
        "An error occurred while interacting with the database"
      );
    }
  }
}
