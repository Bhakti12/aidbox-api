import axios from "axios";
import { InternalServerError } from "../errors/InternalServerError";
import { ICarePlanRepository } from "../interfaces/ICarePlanRepository";
import { careplanDetails } from "../types/Question";
import { config } from "../config/env";
import { injectable } from "inversify";
import mongoose from "mongoose";
const careplanSchema = require("../models/careplan.model");

@injectable()
export default class CareplanRepository implements ICarePlanRepository {
  async addCareplanData(careplan: careplanDetails): Promise<any> {
    try {
      const url = `${config.AIDBOX_URL}/CarePlan`;
      const username = config.AIDBOX_CLIENT_ID;
      const password = config.AIDBOX_CLIENT_SECRET;

      const credentials = Buffer.from(`${username}:${password}`).toString(
        "base64"
      );

      const storeCareplan = await careplanSchema.create({
        title : careplan.title,
        intent : careplan.intent,
        Status : careplan.status,
        Subject : careplan.subject,
        description : careplan.description
      });

      const result = await axios.post(url, careplan, {
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
  async getCareplan(): Promise<any> {
    try {
      const url = `${config.AIDBOX_URL}/careplan`;
      const username = config.AIDBOX_CLIENT_ID;
      const password = config.AIDBOX_CLIENT_SECRET;

      // console.log("url", url, username, password);
      // Encode the credentials to Base64
      const credentials = Buffer.from(`${username}:${password}`).toString(
        "base64"
      );

      const result = await axios.get(url, {
        headers: {
          Authorization: `Basic ${credentials}`,
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
