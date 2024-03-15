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
import { QuestionnaireResponse, storeFormData } from "../types/Question";
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
        resourceType : req.body.resourceType,
        status : req.body.status,
        item : req.body.item
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
}
