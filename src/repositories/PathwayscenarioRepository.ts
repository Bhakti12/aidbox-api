import { injectable } from "inversify";
import { IPathwayscenarioRepository } from "../interfaces/IPathwayscenarioRepository";
import { InternalServerError } from "../errors/InternalServerError";
import { careplan_pathway, formtypes_pathway } from "../types/Pathwayscenario";

@injectable()
export default class PathwayscenarioRepository
  implements IPathwayscenarioRepository
{
  async addPathway_formtypes(pathwayFormtype:formtypes_pathway): Promise<any> {
    try {

    } catch (err) {
      console.log("err", err);
      throw new InternalServerError(
        "An error occurred while interacting with the database"
      );
    }
  }
  async addCareplan_pathway(careplanPathway:careplan_pathway): Promise<any> {
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
