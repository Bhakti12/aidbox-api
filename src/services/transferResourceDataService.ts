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
      console.log("questionnaire data",questionnaireData.item.find(item=>item.text='Instant'));
      const careplan_map : any = {
        resourceType : "careplan",
        title : questionnaireData.item[0].item[0].answer[0].value.string,
        intent : "proposal",
        status : questionnaireData.status,
        subject : questionnaireData.subject,
        description : questionnaireData.item[0].item[1].answer[0].value.string
      };
      const result = await this._mapRepo.mapData(careplan_map);
      return result;
    } catch (err: any) {
      console.log("err", err);
      throw new InternalServerError(
        "An error occurred while interacting with the database"
      );
    }
  }
}
