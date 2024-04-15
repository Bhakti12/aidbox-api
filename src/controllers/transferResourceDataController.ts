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
      const questionnaireResponseId = req.params.id;
      const questionnaireData: any = req.body;
      const convertData = await this._mapService.mapData(questionnaireData);
      return this.sendJSONResponse(
        res,
        "careplan is added",
        { data: 1 },
        convertData
      );
    } catch (err: any) {
      return this.sendErrorResponse(req, res, err);
    }
  }
}
