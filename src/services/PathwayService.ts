import { inject, injectable } from "inversify";
import { IPathwayRepository } from "../interfaces/IPathwayRepository";
import { IPathwayService } from "../interfaces/IPathwayService";
import { pathwayDetails } from "../types/Question";
import { TYPES } from "../config/types";
import { InternalServerError } from "../errors/InternalServerError";

@injectable()
export default class pathwayService implements IPathwayService {
  private _pathwayRepo: IPathwayRepository;

  constructor(
    @inject(TYPES.PathwayRepository)
    pathwayRepo: IPathwayRepository
  ) {
    this._pathwayRepo = pathwayRepo;
  }
  async addPathwayData(pathway: pathwayDetails): Promise<any> {
    try {
      const result = await this._pathwayRepo.addPathwayData(pathway);
      return result;
    } catch (err: any) {
      console.log("err", err);
      throw new InternalServerError(
        "An error occurred while interacting with the database"
      );
    }
  }
  async getPathway(): Promise<any> {
    try {
      const result = await this._pathwayRepo.getPathway();
      return result;
    } catch (err: any) {
      console.log("err", err);
      throw new InternalServerError(
        "An error occurred while interacting with the database"
      );
    }
  }
}
