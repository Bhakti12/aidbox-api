import { inject, injectable } from "inversify";
import { IPathwayscenarioService } from "../interfaces/IPathwayscenarioService";
import { IPathwayscenarioRepository } from "../interfaces/IPathwayscenarioRepository";
import { TYPES } from "../config/types";

@injectable()
export default class PathwayscenarioService implements IPathwayscenarioService {
  private _pathwayRepo: IPathwayscenarioRepository;
  constructor(
    @inject(TYPES.PathwayscenarioRepository)
    pathwayRepo: IPathwayscenarioRepository
  ) {
    this._pathwayRepo = pathwayRepo;
  }
  addPathway_formtypes(): Promise<any> {
    throw new Error("Method not implemented.");
  }
  addCareplan_pathway(): Promise<any> {
    throw new Error("Method not implemented.");
  }
  getFormsOfPatient(): Promise<any> {
    throw new Error("Method not implemented.");
  }
}
