import { IPathway_formtypesService } from "../interfaces/IPathway_formtypesService";
import { formtypes_pathway } from "../types/Pathwayscenario";
import BaseController from "./BaseController";
import express from "express";

export default class Pathway_formtypesController extends BaseController {
  private _pathway_formtypesService: IPathway_formtypesService;

  constructor(pathway_formtypesService: IPathway_formtypesService) {
    super();
    this._pathway_formtypesService = pathway_formtypesService;
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
      const result = await this._pathway_formtypesService.addPathway_formtypes(
        pathway_formtypes
      );
      return this.sendJSONResponse(
        res,
        "added formtype pathway",
        { data: 1 },
        result
      );
    } catch (err) {
      console.log(err);
      this.sendErrorResponse(req, res, err);
    }
  }
}
