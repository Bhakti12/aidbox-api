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
      return this.sendJSONResponse(
        res,
        "data received",
        { data: 1 },
        subscriptions
      );
    } catch (err: any) {
      console.log("err", err);

      return this.sendErrorResponse(req, res, err);
    }
  }

  async storeQuestionnaireResponse(
    req: express.Request,
    res: express.Response
  ) {
    try {
      const question: Record<string, {}> = {
        "questionnaire - 1": {
          client_name: req.body.client_name,
          agree_for_pictures: req.body.agree_for_pictures,
          DateOfBirth: req.body.DateOfBirth,
          Consent_to_allow_the_taking_of_pictures:
            req.body.Consent_to_allow_the_taking_of_pictures,
          consent_for_emails: req.body.consent_for_emails,
          consent_for_communication: req.body.consent_for_emails,
          e_mail: req.body.e_mail,
          bayshore_telephone_number: req.body.bayshore_telephone_number,
          consent_to: req.body.consent_to,
        },
      };

      const config = createConfig();

      const operations = await this._questionService.storeQuestionnaireResponse(
        question
      );

      console.log("operations", operations);

      const ctx = await createCtx({
        config,
        manifest: {
          entities,
          operations,
          subscriptions,
          question,
          apiVersion: 2,
        }as Manifest & { question: Record<string, {}> },
      });

      const helpers = await createHelpers(ctx);

      const app = await createApp({ ctx, helpers }, config);

      await startApp(app, 3001);
      return this.sendJSONResponse(
        res,
        "data received",
        { data: 1 },
        subscriptions
      );
    } catch (err: any) {
      console.log("err", err);
      return this.sendErrorResponse(req, res, err);
    }
  }
}
