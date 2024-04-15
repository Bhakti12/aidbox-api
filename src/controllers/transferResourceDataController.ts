import { ITransferResourceDataService } from "../interfaces/ITransferResourceDataService";
import BaseController from "./BaseController";
import express from "express";

export default class transferResourceDataController extends BaseController {
  private _mapService: ITransferResourceDataService;

  constructor(mapService: ITransferResourceDataService) {
    super();
    this._mapService = mapService;
  }

  async mapData(req: express.Request, res: express.Response) {
    try {
    } catch (err: any) {}
  }
}
