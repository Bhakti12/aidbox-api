import { IPathwayService } from "../interfaces/IPathwayService";
import { pathwayDetails } from "../types/Question";
import BaseController from "./BaseController";
import express from "express";

export default class PathwayController extends BaseController {
  private _pathwayService: IPathwayService;

  constructor(pathwayService: IPathwayService) {
    super();
    this._pathwayService = pathwayService;
  }

  async addPathwayData(req: express.Request, res: express.Response) {
    try {
      const pathway: pathwayDetails = {
        resourceType: req.body.resourceType,
        status: req.body.status,
        pathway_details: req.body.pathway_details,
      };
      const result = await this._pathwayService.addPathwayData(pathway);
      return this.sendJSONResponse(res, "pathway added", { data: 1 }, result);
    } catch (err: any) {
      console.log("err", err);
      return this.sendErrorResponse(req, res, err);
    }
  }

  async getPathway(req: express.Request, res: express.Response) {
    try {
      const result = await this._pathwayService.getPathway();
      return this.sendJSONResponse(res, "pathway data", { data: 1 }, result);
    } catch (err: any) {
      console.log("err", err);
      return this.sendErrorResponse(req, res, err);
    }
  }
}
