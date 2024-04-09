import axios from "axios";
import { InternalServerError } from "../errors/InternalServerError";
import { IPathway_formtypesRepository } from "../interfaces/IPathway_formtypesRepository";
import { formtypes_pathway } from "../types/Pathwayscenario";
import { config } from "../config/env";
import { injectable } from "inversify";

@injectable()
export default class pathway_formtypesRepository implements IPathway_formtypesRepository{
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
    
}