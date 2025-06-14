import { inject, injectable } from "inversify";
import { IPathwayscenarioService } from "../interfaces/IPathwayscenarioService";
import { IPathwayscenarioRepository } from "../interfaces/IPathwayscenarioRepository";
import { TYPES } from "../config/types";
import { InternalServerError } from "../errors/InternalServerError";
import { aidboxQuery, careplan_pathway, formtypes_pathway } from "../types/Pathwayscenario";

@injectable()
export default class PathwayscenarioService implements IPathwayscenarioService {
  private _pathwayRepo: IPathwayscenarioRepository;
  constructor(
    @inject(TYPES.PathwayscenarioRepository)
    pathwayRepo: IPathwayscenarioRepository
  ) {
    this._pathwayRepo = pathwayRepo;
  }
  async storeQuery(query: aidboxQuery,queryName:string): Promise<any> {
    try{
      const result = await this._pathwayRepo.storeQuery(query,queryName);
      return result;  
    }catch(err){
        console.log("err", err);
      throw new InternalServerError(
        "An error occurred while interacting with the database"
      );
    }
  }
  async getFormsOfPatient(queryName:string): Promise<any> {
    try {
      const result = await this._pathwayRepo.getFormsOfPatient(queryName);
      return result;
    } catch (err) {
      console.log("err", err);
      throw new InternalServerError(
        "An error occurred while interacting with the database"
      );
    }
  }
}
