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
import {
  QuestionnaireResponse,
  storeFormData,
  Parameters,
  resourceInformation,
  careplanDetails,
  pathwayDetails,
  formtypesDetails,
  questionnaireDetails,
} from "../types/Question";
import { config } from "../config/env";
const subscriptions = require("../config/subscription");

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
        questionnaire: req.body.questionnaire,
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
      const url = req.body.url;
      const outpath = req.body.outpath;
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
      const formData: Parameters = {
        resourceType: req.body.resourceType,
        parameter: req.body.parameter,
      };
      const result = await this._questionService.generateLink(formData);
      return this.sendJSONResponse(res, "generated link", { data: 1 }, result);
    } catch (err: any) {
      console.log("err", err);
      return this.sendErrorResponse(req, res, err);
    }
  }

  async makeCustomResource(req: express.Request, res: express.Response) {
    try {
      const resource: resourceInformation = {
        id: req.body.id,
        type: req.body.type,
        isOpen: req.body.isOpen,
      };

      const result = await this._questionService.makeCustomResource(resource);
      return this.sendJSONResponse(
        res,
        "resource created",
        { data: 1 },
        result
      );
    } catch (err: any) {
      console.log("err", err);
      return this.sendErrorResponse(req, res, err);
    }
  }

  async updateQuestionnaireData(req: express.Request, res: express.Response) {
    try {
      const question: questionnaireDetails = {
        resourceType: req.body.resourceType,
        status: req.body.status,
        title: req.body.title,
        url: req.body.url,
        id: req.body.id,
        item: req.body.item,
        meta: req.body.meta,
      };

      const result = await this._questionService.updateQuestionnaireData(
        question
      );
      return this.sendJSONResponse(
        res,
        "question data added",
        { data: 1 },
        result
      );
    } catch (err: any) {
      console.log("err", err);
      return this.sendErrorResponse(req, res, err);
    }
  }

  async getQuestionnaireResponse(req: express.Request, res: express.Response) {
    try {
      const result = await this._questionService.getQuestionnaireResponse();
      return this.sendJSONResponse(
        res,
        "questionnaireResponse data",
        { data: 1 },
        result
      );
    } catch (err: any) {
      console.log("err", err);
      return this.sendErrorResponse(req, res, err);
    }
  }

  async getPathwayOfCareplan(req: express.Request, res: express.Response) {
    try {
      const careplan_id: string = req.body.careplan_id;
      const result = await this._questionService.getPathwayOfCareplan(
        careplan_id
      );
      return this.sendJSONResponse(
        res,
        "get pathway of particular careplan",
        { data: 1 },
        result
      );
    } catch (err: any) {
      console.log("err", err);
      return this.sendErrorResponse(req, res, err);
    }
  }
}
