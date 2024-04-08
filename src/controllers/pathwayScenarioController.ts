import { IPathwayscenarioService } from "../interfaces/IPathwayscenarioService";
import BaseController from "./BaseController";
import express from "express";
export default class PathwayScenarioController extends BaseController {
  private _pathwayService: IPathwayscenarioService;

  constructor(pathwayService: IPathwayscenarioService) {
    super();
    this._pathwayService = pathwayService;
  }

  async addPathway_formtypes(req:express.Request,res:express.Response): Promise<any> {
    try {
    } catch (err) {}
  }

  async careplan_pathway(req:express.Request,res:express.Response): Promise<any> {
    try {
    } catch (err) {}
  }
}
