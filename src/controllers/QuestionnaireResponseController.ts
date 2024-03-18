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

  async addCareplanData(req: express.Request, res: express.Response) {
    try {
      const careplan: careplanDetails = {
        diseaseDetails: req.body.diseaseDetails,
        careplanDetails: req.body.careplanDetails,
      };

      const result = await this._questionService.addCareplanData(careplan);
      return this.sendJSONResponse(res, "careplan added", { data: 1 }, result);
    } catch (err: any) {
      console.log("err", err);
      return this.sendErrorResponse(req, res, err);
    }
  }

  async addPathwayData(req: express.Request, res: express.Response) {
    try {
      const pathway: pathwayDetails = {
        pathway_name: req.body.pathway_name,
        careplan_id: req.body.careplan_id,
        form_type_ids: req.body.form_type_ids,
      };
      const result = await this._questionService.addPathwayData(pathway);
      return this.sendJSONResponse(res, "pathway added", { data: 1 }, result);
    } catch (err: any) {
      console.log("err", err);
      return this.sendErrorResponse(req, res, err);
    }
  }

  async addFormTypesData(req: express.Request, res: express.Response) {
    try {
      const formtype: formtypesDetails = {
        form_name: req.body.form_name,
      };
      const result = await this._questionService.addFormTypeData(formtype);
      return this.sendJSONResponse(res, "formtype added", { data: 1 }, result);
    } catch (err: any) {
      console.log("err", err);
      return this.sendErrorResponse(req, res, err);
    }
  }

  async addQuestionnaireData(req: express.Request, res: express.Response) {
    try {
      const question: questionnaireDetails = {
        resourceType: req.body.resourceType,
        status: req.body.status,
        title: req.body.title,
        url: req.body.url,
        item: req.body.item,
        meta: req.body.meta,
        id: req.body.id,
      };

      const result = await this._questionService.addQuestionnaireData(question);
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

  async getCareplan(req:express.Request,res:express.Response) {
    try{
      const result = await this._questionService.getCareplan();
      return this.sendJSONResponse(res,"careplan data",{data:1},result);
    }catch(err:any){
      console.log("err", err);
      return this.sendErrorResponse(req, res, err);
    }
  }

  async getPathway(req:express.Request,res:express.Response) {
    try{
      const result = await this._questionService.getPathway();
      return this.sendJSONResponse(res,"pathway data",{data:1},result);
    }catch(err:any){
      console.log("err", err);
      return this.sendErrorResponse(req, res, err);
    }
  }

  async getFormtype(req:express.Request,res:express.Response) {
    try{
      const result = await this._questionService.getFormType();
      return this.sendJSONResponse(res,"formTypes data",{data:1},result);
    }catch(err:any){
      console.log("err", err);
      return this.sendErrorResponse(req, res, err);
    }
  }

  async getQuestionnaireResponse(req:express.Request,res:express.Response) {
    try{
      const result = await this._questionService.getQuestionnaireResponse();
      return this.sendJSONResponse(res,"questionnaireResponse data",{data:1},result);
    }catch(err:any){
      console.log("err", err);
      return this.sendErrorResponse(req, res, err);
    }
  }
}
