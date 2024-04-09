import { IFormtypesService } from "../interfaces/IFormtypesService";
import { formtypesDetails } from "../types/Question";
import BaseController from "./BaseController";
import express from "express";

export default class FormtypesController extends BaseController {
  private _formtypesService: IFormtypesService;

  constructor(formtypesService: IFormtypesService) {
    super();
    this._formtypesService = formtypesService;
  }

  async addFormTypesData(req: express.Request, res: express.Response) {
    try {
      const formtype: formtypesDetails = {
        resourceType: req.body.resourceType,
        status: req.body.status,
        formDetails: req.body.formDetails,
      };
      const result = await this._formtypesService.addFormTypeData(formtype);
      return this.sendJSONResponse(res, "formtype added", { data: 1 }, result);
    } catch (err: any) {
      console.log("err", err);
      return this.sendErrorResponse(req, res, err);
    }
  }

  async getFormtype(req: express.Request, res: express.Response) {
    try {
      const result = await this._formtypesService.getFormType();
      return this.sendJSONResponse(res, "formTypes data", { data: 1 }, result);
    } catch (err: any) {
      console.log("err", err);
      return this.sendErrorResponse(req, res, err);
    }
  }
}
