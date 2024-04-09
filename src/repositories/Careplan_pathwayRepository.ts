import axios from "axios";
import { config } from "../config/env";
import { InternalServerError } from "../errors/InternalServerError";
import { ICareplan_pathwayRepository } from "../interfaces/ICareplan_pathwayRepository";
import { careplan_pathway } from "../types/Pathwayscenario";

export default class careplan_pathwayRepository implements ICareplan_pathwayRepository{
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

}