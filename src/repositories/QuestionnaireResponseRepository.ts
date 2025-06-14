import axios from "axios";
import { InternalServerError } from "../errors/InternalServerError";
import { IQuestionnaireResponseRepository } from "../interfaces/IQuestionnaireResponseRepository";
import {
  Parameters,
  QuestionnaireResponse,
  careplanDetails,
  formtypesDetails,
  pathwayDetails,
  questionnaireDetails,
  resourceInformation,
  storeFormData,
} from "../types/Question";
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
import puppeteer from "puppeteer";
const questionnaireResponseSchema = require("../models/questionnaireResponse.model");

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

  async storeQuestionnaireResponse(
    question: QuestionnaireResponse
  ): Promise<any> {
    try {
      // console.log("question",question);
      const url = `${config.AIDBOX_URL}/QuestionnaireResponse`;
      const username = config.AIDBOX_CLIENT_ID;
      const password = config.AIDBOX_CLIENT_SECRET;

      const credentials = Buffer.from(`${username}:${password}`).toString(
        "base64"
      );

      const store = await questionnaireResponseSchema.create({
        status : question.status,
        item : question.item,
        url : question.questionnaire
      });

      console.log("store",store);

      const result = await axios.post(url, question, {
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

  async shareForm(url: string, outpath: string): Promise<any> {
    try {
      const browser = await puppeteer.launch();
      const page = await browser.newPage();

      await page.goto(url, {
        waitUntil: "networkidle2",
      });
      await page.pdf({ path: `${__dirname}/${outpath}`, format: "A4" });
      await browser.close();
    } catch (err: any) {
      console.log("err", err);
      throw new InternalServerError(
        "An error occurred while interacting with the database"
      );
    }
  }

  async generateLink(formdetails: Parameters): Promise<any> {
    try {
      console.log("abc");
      const url = `${config.AIDBOX_URL}/Questionnaire/${formdetails.parameter[0].valueReference?.id}/$populatelink`;
      const username = config.AIDBOX_CLIENT_ID;
      const password = config.AIDBOX_CLIENT_SECRET;

      const credentials = Buffer.from(`${username}:${password}`).toString(
        "base64"
      );

      const result = await axios.post(url, formdetails, {
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

  async makeCustomResource(resource: resourceInformation): Promise<any> {
    try {
      const url = `${config.AIDBOX_URL}/Entity`;
      const username = config.AIDBOX_CLIENT_ID;
      const password = config.AIDBOX_CLIENT_SECRET;

      const credentials = Buffer.from(`${username}:${password}`).toString(
        "base64"
      );

      const result = await axios.post(url, resource, {
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
  
  async updateQuestionnaireData(question: questionnaireDetails): Promise<any> {
    try {
      console.log("question",question);
      const url = `${config.AIDBOX_URL}/Questionnaire/${question.id}`;
      const username = config.AIDBOX_CLIENT_ID;
      const password = config.AIDBOX_CLIENT_SECRET;

      console.log("url",url);

      const credentials = Buffer.from(`${username}:${password}`).toString(
        "base64"
      );

      const result = await axios.put(url,question,{
        headers: {
          Authorization: `Basic ${credentials}`,
          Accept: "application/json"
        }
      });
      return result.data;
    } catch (err: any) {
      console.log("err", err.response.data);
      throw new InternalServerError(
        "An error occurred while interacting with the database"
      );
    }
  }

  async getQuestionnaireResponse(): Promise<any> {
    try {
      const url = `${config.AIDBOX_URL}/QuestionnaireResponse`;
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

  async getPathwayOfCareplan(careplan_id: string): Promise<any> {
    try{
      const url = `${config.AIDBOX_URL}/pathway`;
      const username = config.AIDBOX_CLIENT_ID;
      const password = config.AIDBOX_CLIENT_SECRET;

      const credentials = Buffer.from(`${username}:${password}`).toString(
        "base64"
      );

      const result = await axios.get(url,{
        headers: {
          Authorization: `Basic ${credentials}`,
        }, 
      });
      return result.data;
    }catch(err:any){
      console.log("err", err.response.data);
      throw new InternalServerError(
        "An error occurred while interacting with the database"
      );
    }
  }
  
  async getFormsOfPathway(pathway_id: string): Promise<any> {
    try{

    }catch(err:any){
      console.log("err", err.response.data);
      throw new InternalServerError(
        "An error occurred while interacting with the database"
      );
    }
  }
}
