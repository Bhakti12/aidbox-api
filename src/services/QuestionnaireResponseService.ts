import { inject, injectable } from "inversify";
import { TYPES } from "../config/types";
import { InternalServerError } from "../errors/InternalServerError";
import { IQuestionnaireResponseService } from "../interfaces/IQuestionnaireResponseService";
import { storeFormData } from "../types/Question";
import { IQuestionnaireResponseRepository } from "../interfaces/IQuestionnaireResponseRepository";
import { createCtx, createApp, startApp, Resource, Manifest, CtxProps, ManifestOperation } from "@aidbox/node-server-sdk";
import { createConfig } from "@aidbox/node-server-sdk";
import { createHelpers } from "../config/helpers";
const subscriptions = require("../config/subscription");
const entities = require("../models/entities");

@injectable()
export default class QuestionnaireResponseService implements IQuestionnaireResponseService{
    
    private _questionRepo : IQuestionnaireResponseRepository;

    constructor(
        @inject(TYPES.QuestionnaireResponseRepository) questionRepo: IQuestionnaireResponseRepository
    ){
        this._questionRepo = questionRepo;
    }

    async getQuestionnair(): Promise<any> {
        try{
            // const config = createConfig();

            const operations = this._questionRepo.getQuestionnair();
            // console.log("operations",operations);
            // const ctx = createCtx({
            //     config,
            //     manifest: { operations,subscriptions,apiVersion: 2 },
            // });
            // console.log("subscription",subscriptions);
            // const helpers = createHelpers(ctx);
            // // const app = createApp({ ctx, helpers, loggerEnbaled: true },config);
            // const app1 = createApp({ ctx, helpers }, config);
            return operations;
        }catch(err){
            console.log("err",err);
            throw new InternalServerError('An error occurred while interacting with the database');
        }
    }
    
    async storeQuestionnaireResponse(question: any): Promise<any> {
        try{
            const config = createConfig();
            const ctx = createCtx({
                config,
                manifest: { subscriptions, entities, apiVersion: 2 },
            });
            const helpers = createHelpers(ctx);
            const app1 = createApp({ ctx, helpers }, config);
        }catch(err){
            console.log("err",err);
            throw new InternalServerError('An error occurred while interacting with the database');
        }
    }   
}