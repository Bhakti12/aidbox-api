import express from "express";
import { IQuestionnaireResponseService } from "../interfaces/IQuestionnaireResponseService";
import BaseController from "./BaseController";
import { createApp, createConfig, createCtx } from "@aidbox/node-server-sdk";
import { createHelpers } from "../config/helpers";
const subscriptions = require("../config/subscription");

export default class QuestionnaireResponseController extends BaseController{
    private _questionService: IQuestionnaireResponseService;

    constructor(questionService:IQuestionnaireResponseService) {
        super();
        this._questionService = questionService
    }

    async getFormData(req:express.Request,res:express.Response){
        try{
            const config = createConfig();
            
            const operations = this._questionService.getQuestionnair();
            
            console.log("operations",operations);
            
            const ctx = createCtx({
                config,
                manifest: { operations,subscriptions,apiVersion: 2 },
            });

            const helpers = createHelpers(ctx);

            const app = createApp({ctx,helpers},config);
            // const result = this._questionService.getQuestionnair();            
            return this.sendJSONResponse(res,"data received",{data : 1},operations);
        }catch(err:any){
            console.log("err",err);

            return this.sendErrorResponse(req,res,err);
        }
    }

    async storeQuestionnaireResponse(req:express.Request,res:express.Response){
        try{
          console.log("inside controller");  
            
          
          const result = this._questionService.storeQuestionnaireResponse(req.body);
        
          console.log("result",result);
          return this.sendJSONResponse(res,"store successfully",{data: 1},result);
        }catch(err:any){
            console.log("err",err);
            return this.sendErrorResponse(req,res,err);
        }
    }
}