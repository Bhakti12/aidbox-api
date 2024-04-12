import { IPathwayscenarioService } from "../interfaces/IPathwayscenarioService";
import { aidboxQuery, careplan_pathway, formtypes_pathway } from "../types/Pathwayscenario";
import BaseController from "./BaseController";
import express from "express";
export default class PathwayScenarioController extends BaseController {
  private _pathwayService: IPathwayscenarioService;

  constructor(pathwayService: IPathwayscenarioService) {
    super();
    this._pathwayService = pathwayService;
  }
  async storeQuery(req:express.Request,res:express.Response): Promise<any>{
    try{
        const queryName = req.body.queryName;
        const query: aidboxQuery = {
            params: req.body.params,
            query: req.body.query
        };
        const result = await this._pathwayService.storeQuery(query,queryName);
        return this.sendJSONResponse(res,'query stored',{data:1},result);
    }catch(err){
        console.log(err);
        this.sendErrorResponse(req, res, err);
    }
  }

  async getFormsofPatient(
    req: express.Request,
    res: express.Response
  ): Promise<any> {
    try {
      const queryName = req.body.queryName;
      const result = await this._pathwayService.getFormsOfPatient(queryName);
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
