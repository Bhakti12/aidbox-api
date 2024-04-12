import axios from "axios";
import { InternalServerError } from "../errors/InternalServerError";
import { IPathwayRepository } from "../interfaces/IPathwayRepository";
import { pathwayDetails } from "../types/Question";
import { config } from "../config/env";
import { injectable } from "inversify";
const pathwaySchema = require("../models/pathway.model");

@injectable()
export default class PathwayRepository implements IPathwayRepository {
  async addPathwayData(pathway: pathwayDetails): Promise<any> {
    try {
      const url = `${config.AIDBOX_URL}/pathway`;
      const username = config.AIDBOX_CLIENT_ID;
      const password = config.AIDBOX_CLIENT_SECRET;

      const credentials = Buffer.from(`${username}:${password}`).toString(
        "base64"
      );

      const storePathway = await pathwaySchema.create({
        pathway_details : pathway.pathway_details.pathway_name
      });

      const result = await axios.post(url, pathway, {
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
  async getPathway(): Promise<any> {
    try {
      const url = `${config.AIDBOX_URL}/pathway`;
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
