import express from "express";
import { ISubscriptionService } from "../interfaces/ISubscriptionService";
import BaseController from "./BaseController";

export default class SubscriptionController extends BaseController {
  private _subService: ISubscriptionService;

  constructor(subscriptionService: ISubscriptionService) {
    super();
    this._subService = subscriptionService;
  }

  async createSubscription(req:express.Request,res:express.Response){
    try{

    }catch(err:any){

    }
  }

  async getSubscriptionStatus(req:express.Request,res:express.Response){
    try{

    }catch(err:any){
        
    }
  }

  async getSubscriptionEvent(req:express.Request,res:express.Response){
    try{

    }catch(err:any){
        
    }
  }

  async deleteSubscription(req:express.Request,res:express.Response){
    try{

    }catch(err:any){
        
    }
  }
}
