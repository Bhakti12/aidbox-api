import { injectable } from "inversify";
import { IPathwayscenarioRepository } from "../interfaces/IPathwayscenarioRepository";
import { InternalServerError } from "../errors/InternalServerError";
import {
  aidboxQuery,
  careplan_pathway,
  formtypes_pathway,
} from "../types/Pathwayscenario";
import { config } from "../config/env";
import axios from "axios";

@injectable()
export default class PathwayscenarioRepository
  implements IPathwayscenarioRepository
{
  async addPathway_formtypes(pathwayFormtype: formtypes_pathway): Promise<any> {
    try {
      const url = `${config.AIDBOX_URL}/formtypes_pathway`;
      const username = config.AIDBOX_CLIENT_ID;
      const password = config.AIDBOX_CLIENT_SECRET;

      const credentials = Buffer.from(`${username}:${password}`).toString(
        "base64"
      );

      const result = await axios.post(url, pathwayFormtype, {
        headers: {
          Authorization: `Basic ${credentials}`,
          accept: "application/json",
        },
      });
      return result.data;
    } catch (err) {
      console.log("err", err);
      throw new InternalServerError(
        "An error occurred while interacting with the database"
      );
    }
  }
  async addCareplan_pathway(careplanPathway: careplan_pathway): Promise<any> {
    try {
      const url = `${config.AIDBOX_URL}/careplan_pathway`;
      const username = config.AIDBOX_CLIENT_ID;
      const password = config.AIDBOX_CLIENT_SECRET;

      const credentials = Buffer.from(`${username}:${password}`).toString(
        "base64"
      );

      const result = await axios.post(url, careplanPathway, {
        headers: {
          Authorization: `Basic ${credentials}`,
          accept: "application/json",
        },
      });
      return result.data;
    } catch (err) {
      console.log("err", err);
      throw new InternalServerError(
        "An error occurred while interacting with the database"
      );
    }
  }
  async storeQuery(query: aidboxQuery, queryName: string): Promise<any> {
    try {
      const url = `${config.AIDBOX_URL}/AidboxQuery/${queryName}`;
      const username = config.AIDBOX_CLIENT_ID;
      const password = config.AIDBOX_CLIENT_SECRET;

      const credentials = Buffer.from(`${username}:${password}`).toString(
        "base64"
      );

      const result = await axios.put(url, query, {
        headers: {
          Authorization: `Basic ${credentials}`,
        },
      });
      return result.data;
    } catch (err) {
      console.log("err", err);
      throw new InternalServerError(
        "An error occurred while interacting with the database"
      );
    }
  }
  async getFormsOfPatient(queryName:string): Promise<any> {
    try {
      const url = `${config.AIDBOX_URL}/$query/${queryName}`;
      const username = config.AIDBOX_CLIENT_ID;
      const password = config.AIDBOX_CLIENT_SECRET;

      const credentials = Buffer.from(`${username}:${password}`).toString(
        "base64"
      );

      const result = await axios.get(url, {
        headers: {
          Authorization: `Basic ${credentials}`,
        },
      });
      return result.data;
    } catch (err) {
      console.log("err", err);
      throw new InternalServerError(
        "An error occurred while interacting with the database"
      );
    }
  }
}
