import express from "express";
import { IQuestionnaireResponseService } from "../interfaces/IQuestionnaireResponseService";
import BaseController from "./BaseController";
import {
  Manifest,
  ManifestProps,
  createApp,
  createConfig,
  createCtx,
  startApp,
} from "@aidbox/node-server-sdk";
import { createHelpers } from "../config/helpers";
import { storeFormData } from "../types/Question";
import env from "../config/env";
const subscriptions = require("../config/subscription");
const entities = require("../models/entities");

export default class QuestionnaireResponseController extends BaseController {
  private _questionService: IQuestionnaireResponseService;

  constructor(questionService: IQuestionnaireResponseService) {
    super();
    this._questionService = questionService;
  }

  async getFormData(req: express.Request, res: express.Response) {
    try {
      const config = createConfig();

      const operations = await this._questionService.getQuestionnair();

      console.log("operations", operations);

      const ctx = await createCtx({
        config,
        manifest: { operations, subscriptions },
      });

      const helpers = await createHelpers(ctx);

      const app = await createApp({ ctx, helpers }, config);

      await startApp(app, 3001);
      console.log("res",res,"subscriptions",subscriptions);
      return this.sendJSONResponse(
        res,
        "data received",
        { data: 1 },
        subscriptions
      );
    } catch (err: any) {
      console.log("err", err.response.data);

      return this.sendErrorResponse(req, res, err);
    }
  }

  async storeQuestionnaireResponse(
    req: express.Request,
    res: express.Response
  ) {
    try {
      const QuestionnaireResponse: Record<string, any> = {
            client_name: req.body.client_name
      };

      const config = createConfig();

      const operations = await this._questionService.storeQuestionnaireResponse(
        QuestionnaireResponse
      );

      console.log("operations", operations);

      const ctx = await createCtx({
        config,
        manifest: {
          entities,
          operations,
          subscriptions,
          QuestionnaireResponse,
          apiVersion: 2,
        } as Manifest & { QuestionnaireResponse: Record<string, any> },
      });

      const helpers = await createHelpers(ctx);

      const app = await createApp({ ctx, helpers }, config);

      console.log("operations",operations.createQuestionnaire.handlerFn(req,{ctx,helpers}));
      console.log("subscriptions",subscriptions.QuestionnaireResponse.handlerFn(req, {ctx,helpers}));

      await startApp(app, 3001);
      return this.sendJSONResponse(
        res,
        "data received",
        { data: 1 },
        subscriptions
      );
    } catch (err: any) {
      console.log("err", err.response.data);
      return this.sendErrorResponse(req, res, err);
    }
  }
}
