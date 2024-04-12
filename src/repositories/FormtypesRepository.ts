import axios from "axios";
import { InternalServerError } from "../errors/InternalServerError";
import { IFormtypesRepository } from "../interfaces/IFormtypesRepository";
import { formtypesDetails } from "../types/Question";
import { config } from "../config/env";
import { injectable } from "inversify";
const formTypeSchema = require("../models/formtypes.model");

@injectable()
export default class Formtypes implements IFormtypesRepository{
    async addFormTypeData(formtype: formtypesDetails): Promise<any> {
        try {
          const url = `${config.AIDBOX_URL}/formtypes`;
          const username = config.AIDBOX_CLIENT_ID;
          const password = config.AIDBOX_CLIENT_SECRET;
    
          const credentials = Buffer.from(`${username}:${password}`).toString(
            "base64"
          );
    
          const storeFormtypes = await formTypeSchema.create({
            status : formtype.status,
            form_name : formtype.formDetails.form_name,
            form_code : formtype.formDetails.form_code,
            description : formtype.formDetails.description,
            form_fill_stage : formtype.formDetails.form_fill_stage,
            form_filled_by : formtype.formDetails.form_filled_by,
            form_accessed_by : formtype.formDetails.form_accessed_by
          });

          const result = await axios.post(url, formtype, {
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
    async getFormType(): Promise<any> {
        try {
          const url = `${config.AIDBOX_URL}/formtypes`;
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