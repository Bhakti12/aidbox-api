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
      const careplan_map : any = {
        title : questionnaireData.item[0].item[0].answer[0].value.string,
        intent : questionnaireData.item.find(item=>item.text='Intent').answer[0].value.Coding.display,
        status : questionnaireData.item.find(item => item.text === 'Status').answer[0].value.Coding.display,
        description : questionnaireData.item[0].item[1].answer[0].value.string
      };
      const result = await this._mapRepo.mapData(careplan_map);
      return result;
    } catch (err: any) {
      console.log("err", err.response.data);
      throw new InternalServerError(
        "An error occurred while interacting with the database"
      );
    }
  }
}
