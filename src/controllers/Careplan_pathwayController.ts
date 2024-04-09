import { ICareplan_pathwayService } from "../interfaces/ICareplan_patwayService";
import { careplan_pathway } from "../types/Pathwayscenario";
import BaseController from "./BaseController";
import express from "express";

export default class Careplan_pathwayController extends BaseController {
  private _careplan_pathwayService: ICareplan_pathwayService;

  constructor(careplan_pathwayService: ICareplan_pathwayService) {
    super();
    this._careplan_pathwayService = careplan_pathwayService;
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
      const result = await this._careplan_pathwayService.addCareplan_pathway(
        careplan_pathway
      );
      return this.sendJSONResponse(
        res,
        "added careplan pathway",
        { data: 1 },
        result
      );
    } catch (err) {
      console.log(err);
      this.sendErrorResponse(req, res, err);
    }
  }
}
