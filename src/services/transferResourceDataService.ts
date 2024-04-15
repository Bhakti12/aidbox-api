import { inject, injectable } from "inversify";
import { InternalServerError } from "../errors/InternalServerError";
import { ITransferResourceDataService } from "../interfaces/ITransferResourceDataService";
import { ITransferResourceDataRepository } from "../interfaces/ITransferResourceDataRepository";
import { TYPES } from "../config/types";

@injectable()
export default class TransferResourceDataService
  implements ITransferResourceDataService
{
  private _mapRepo: ITransferResourceDataRepository;

  constructor(
    @inject(TYPES.TransferResourceDataRepository)
    mapRepo: ITransferResourceDataRepository
  ) {
    this._mapRepo = mapRepo;
  }
  async mapData(questionnaireData: any): Promise<any> {
    try {
    } catch (err: any) {
      console.log("err", err.response.data);
      throw new InternalServerError(
        "An error occurred while interacting with the database"
      );
    }
  }
}
