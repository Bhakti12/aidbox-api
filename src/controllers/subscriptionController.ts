import express from "express";
import { ISubscriptionService } from "../interfaces/ISubscriptionService";
import BaseController from "./BaseController";
import { Subscription } from "../types/Subscription";

export default class SubscriptionController extends BaseController {
  private _subService: ISubscriptionService;

  constructor(subscriptionService: ISubscriptionService) {
    super();
    this._subService = subscriptionService;
  }

  async createSubscription(req: express.Request, res: express.Response) {
    try {
      const subscription: Subscription = {
        resourceType: req.body.resourceType,
        meta: req.body.meta,
        criteria: req.body.criteria,
        channel: req.body.channel,
        reason: req.body.reason,
        status: req.body.status,
        id: req.body.id,
        end: req.body.end,
      };
      const result = await this._subService.createSubscription(subscription);
      this.sendJSONResponse(res, "subscription created", { data: 1 }, result);
    } catch (err: any) {
      return this.sendErrorResponse(req, res, err);
    }
  }

  async getSubscriptionStatus(req: express.Request, res: express.Response) {
    try {
      const getStatus = await this._subService.getStatusOfSubscription();
      this.sendJSONResponse(
        res,
        "status of subscription",
        { data: 1 },
        getStatus
      );
    } catch (err: any) {
      return this.sendErrorResponse(req, res, err);
    }
  }

  async getSubscriptionEvent(req: express.Request, res: express.Response) {
    try {
      const getEvents = await this._subService.getSubscriptionEvents();
      this.sendJSONResponse(
        res,
        "events of subscription",
        { data: 1 },
        getEvents
      );
    } catch (err: any) {
      return this.sendErrorResponse(req, res, err);
    }
  }

  async deleteSubscription(req: express.Request, res: express.Response) {
    try {
      const deleteSubscription = await this._subService.deleteSubscriptions();
      this.sendJSONResponse(
        res,
        "subscription deleted",
        { data: 1 },
        deleteSubscription
      );
    } catch (err: any) {
      return this.sendErrorResponse(req, res, err);
    }
  }
}
