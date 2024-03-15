import axios from "axios";
import { InternalServerError } from "../errors/InternalServerError";
import { IQuestionnaireResponseRepository } from "../interfaces/IQuestionnaireResponseRepository";
import { QuestionnaireResponse, storeFormData } from "../types/Question";
import { injectable } from "inversify";
import * as assert from "assert";
import {
  ManifestOperations,
  NotFoundError,
  ValidationError,
} from "@aidbox/node-server-sdk";
import { TOperation } from "../config/helpers";
import { config } from "../config/env";
import { application } from "express";

@injectable()
export class QuestionnaireResponseRepository
  implements IQuestionnaireResponseRepository
{
  async getQuestionnair(): Promise<any> {
    try {
      const url = `${config.AIDBOX_URL}/Questionnaire`;
      const username = config.AIDBOX_CLIENT_ID;
      const password = config.AIDBOX_CLIENT_SECRET;

      console.log("url", url, username, password);
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
    } catch (err) {
      console.log("err", err);
      throw new InternalServerError(
        "An error occurred while interacting with the database"
      );
    }
  }

  async storeQuestionnaireResponse(question: QuestionnaireResponse): Promise<any> {
    try {
      const url = `${config.AIDBOX_URL}/QuestionnaireResponse`;
      const username = config.AIDBOX_CLIENT_ID;
      const password = config.AIDBOX_CLIENT_SECRET;

      const credentials = Buffer.from(`${username}:${password}`).toString(
        "base64"
      );

      const result = await axios.post(url, question, {
        headers: {
          Authorization: `Basic ${credentials}`,
          accept: "application/json"
        },
      });
      return result.data;
    } catch (err) {
      console.log("err", err.response.data);
      throw new InternalServerError(
        "An error occurred while interacting with the database"
      );
    }
  }
}
