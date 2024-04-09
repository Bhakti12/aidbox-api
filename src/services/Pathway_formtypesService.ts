import { inject, injectable } from "inversify";
import { IPathway_formtypesService } from "../interfaces/IPathway_formtypesService";
import { formtypes_pathway } from "../types/Pathwayscenario";
import { IPathway_formtypesRepository } from "../interfaces/IPathway_formtypesRepository";
import { TYPES } from "../config/types";
import { InternalServerError } from "../errors/InternalServerError";

@injectable()
export default class pathway_formtypesService
  implements IPathway_formtypesService
{
  private _pathway_formtypesRepo: IPathway_formtypesRepository;
  constructor(
    @inject(TYPES.Pathway_formtypesRepository)
    pathway_formtypesRepo: IPathway_formtypesRepository
  ) {
    this._pathway_formtypesRepo = pathway_formtypesRepo;
  }
  async addPathway_formtypes(pathwayFormtype: formtypes_pathway): Promise<any> {
    try {
      const result = await this._pathway_formtypesRepo.addPathway_formtypes(
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
}
