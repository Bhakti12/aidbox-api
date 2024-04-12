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
const aidboxQuerySchema = require("../models/aidboxQuery.model");

@injectable()
export default class PathwayscenarioRepository
  implements IPathwayscenarioRepository
{
  async storeQuery(query: aidboxQuery, queryName: string): Promise<any> {
    try {
      const url = `${config.AIDBOX_URL}/AidboxQuery/${queryName}`;
      const username = config.AIDBOX_CLIENT_ID;
      const password = config.AIDBOX_CLIENT_SECRET;

      const credentials = Buffer.from(`${username}:${password}`).toString(
        "base64"
      );

      const storeQuery = await aidboxQuerySchema.create({
        params : query.params,
        Query : query.query
      });

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
