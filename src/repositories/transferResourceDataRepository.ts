import axios from "axios";
import { config } from "../config/env";
import { InternalServerError } from "../errors/InternalServerError";
import { ITransferResourceDataRepository } from "../interfaces/ITransferResourceDataRepository";
import { injectable } from "inversify";

@injectable()
export default class TransferResourceDataRepository
  implements ITransferResourceDataRepository
{
  async mapData(questionnaireData: any): Promise<any> {
    try {
        const url = `${config.AIDBOX_URL}/CarePlan`;
      const username = config.AIDBOX_CLIENT_ID;
      const password = config.AIDBOX_CLIENT_SECRET;
      const credentials = Buffer.from(`${username}:${password}`).toString(
        "base64"
      );
      const result = await axios.post(url, questionnaireData, {
        headers: {
            Authorization: `Basic ${credentials}`,
            accept: "application/json",
          },
      });
      return result.data;
    } catch (err: any) {
      console.log("err", err.response.data);
      throw new InternalServerError(
        "An error occurred while interacting with the database"
      );
    }
  }
}
