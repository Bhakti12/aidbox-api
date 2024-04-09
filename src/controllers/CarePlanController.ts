import { ICarePlanService } from "../interfaces/ICarePlanService";
import { careplanDetails } from "../types/Question";
import BaseController from "./BaseController";
import express from "express";

export default class CareplanController extends BaseController {
  private _careplanService: ICarePlanService;

  constructor(careplanService: ICarePlanService) {
    super();
    this._careplanService = careplanService;
  }
  async getCareplan(req: express.Request, res: express.Response) {
    try {
      const result = await this._careplanService.getCareplan();
      return this.sendJSONResponse(res, "careplan data", { data: 1 }, result);
    } catch (err: any) {
      console.log("err", err);
      return this.sendErrorResponse(req, res, err);
    }
  }
  async addCareplanData(req: express.Request, res: express.Response) {
    try {
      const careplan: careplanDetails = {
        resourceType: req.body.resourceType,
        status: req.body.status,
        intent: req.body.intent,
        subject: req.body.subject,
        title: req.body.title,
        description: req.body.description,
      };

      const result = await this._careplanService.addCareplanData(careplan);
      return this.sendJSONResponse(res, "careplan added", { data: 1 }, result);
    } catch (err: any) {
      console.log("err", err);
      return this.sendErrorResponse(req, res, err);
    }
  }
}
