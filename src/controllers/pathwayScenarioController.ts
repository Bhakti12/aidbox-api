import { IPathwayscenarioService } from "../interfaces/IPathwayscenarioService";
import { careplan_pathway, formtypes_pathway } from "../types/Pathwayscenario";
import BaseController from "./BaseController";
import express from "express";
export default class PathwayScenarioController extends BaseController {
  private _pathwayService: IPathwayscenarioService;

  constructor(pathwayService: IPathwayscenarioService) {
    super();
    this._pathwayService = pathwayService;
  }

  async addPathway_formtypes(
    req: express.Request,
    res: express.Response
  ): Promise<any> {
    try {
      const pathway_formtypes: formtypes_pathway = {
        resourceType: req.body.resourceType,
        pathway_id: req.body.pathway_id,
        formtype_id: req.body.formtype_id,
      };
      const result = await this._pathwayService.addPathway_formtypes(
        pathway_formtypes
      );
      this.sendJSONResponse(res, "added formtype pathway", { data: 1 }, result);
    } catch (err) {
      console.log(err);
      this.sendErrorResponse(req, res, err);
    }
  }

  async careplan_pathway(
    req: express.Request,
    res: express.Response
  ): Promise<any> {
    try {
      const careplan_pathway: careplan_pathway = {
        resourceType: req.body.resourceType,
        pathway_id: req.body.pathway_id,
        careplan_id: req.body.careplan_id,
      };
      const result = await this._pathwayService.addCareplan_pathway(
        careplan_pathway
      );
      this.sendJSONResponse(res, "added careplan pathway", { data: 1 }, result);
    } catch (err) {
      console.log(err);
      this.sendErrorResponse(req, res, err);
    }
  }
}
