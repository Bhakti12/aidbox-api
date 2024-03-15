import express from "express";
import { IQuestionnaireResponseService } from "../interfaces/IQuestionnaireResponseService";
import BaseController from "./BaseController";
import {
  Manifest,
  ManifestProps,
  createApp,
  createConfig,
  createCtx,
  startApp,
} from "@aidbox/node-server-sdk";
import { createHelpers } from "../config/helpers";
import { QuestionnaireResponse, storeFormData, Parameters } from "../types/Question";
import { config } from "../config/env";
const subscriptions = require("../config/subscription");
const entities = require("../models/entities");

export default class QuestionnaireResponseController extends BaseController {
  private _questionService: IQuestionnaireResponseService;

  constructor(questionService: IQuestionnaireResponseService) {
    super();
    this._questionService = questionService;
  }

  async getFormData(req: express.Request, res: express.Response) {
    try {
      const result = await this._questionService.getQuestionnair();
      console.log("resulttt", result);

      return this.sendJSONResponse(res, "data received", { data: 1 }, result);
    } catch (err: any) {
      console.log("err", err);

      return this.sendErrorResponse(req, res, err);
    }
  }

  async storeQuestionnaireResponse(
    req: express.Request,
    res: express.Response
  ) {
    try {
      const question: QuestionnaireResponse = {
        resourceType: req.body.resourceType,
        status: req.body.status,
        item: req.body.item,
      };

      const result = await this._questionService.storeQuestionnaireResponse(
        question
      );
      return this.sendJSONResponse(res, "data received", { data: 1 }, result);
    } catch (err: any) {
      console.log("err", err);
      return this.sendErrorResponse(req, res, err);
    }
  }

  async shareForm(req: express.Request, res: express.Response) {
    try {
      const url =
        "http://localhost:8888/ui/sdc#/questionnaire-response/704f1f2c-7d7a-464d-b941-35043ae64c38?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJTRENTaGFyZWRMaW5rSXNzdWVyIiwiZXhwIjoxNzExMDY1NjAwLCJvcGVyYXRpb25zIjpbImZoaXItcHJvY2Vzcy1yZXNwb25zZSIsInByb2Nlc3MtcmVzcG9uc2UiXSwicSI6eyJpZCI6InNpbXBsZS1mb3JtIiwidXJsIjoiaHR0cDovL2Zvcm1zLmFpZGJveC5pby9xdWVzdGlvbm5haXJlL3BlcnNvbmFsLWRldGFpbHMifSwicXIiOnsiaWQiOiI3MDRmMWYyYy03ZDdhLTQ2NGQtYjk0MS0zNTA0M2FlNjRjMzgifSwiYWxsb3ctYW1lbmQiOm51bGwsInJlZGlyZWN0LW9uLXNhdmUiOm51bGwsInJlZGlyZWN0LW9uLXN1Ym1pdCI6bnVsbH0.DGf-RNLSiED8B8xCuoUhnIi0_CvnfYfatjaGYtNNNuI";
      const outpath = "output.pdf";
      const generatePDF = await this._questionService.shareForm(url, outpath);
      return this.sendJSONResponse(
        res,
        "generated pdf",
        { data: 1 },
        generatePDF
      );
    } catch (err: any) {
      console.log("err", err);
      return this.sendErrorResponse(req, res, err);
    }
  }

  async generateLink(req: express.Request, res: express.Response) {
    try {
        const formData : Parameters = {
            resourceType : req.body.resourceType,
            parameter : req.body.parameter
        }; 
        const result = await this._questionService.generateLink(formData);
        return this.sendJSONResponse(res,"generated link",{data : 1},result);
    } catch (err: any) {
      console.log("err", err);
      return this.sendErrorResponse(req, res, err);
    }
  }
}
