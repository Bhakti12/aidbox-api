import { inject, injectable } from "inversify";
import { TYPES } from "../config/types";
import { InternalServerError } from "../errors/InternalServerError";
import { IQuestionnaireResponseService } from "../interfaces/IQuestionnaireResponseService";
import { QuestionnaireResponse, storeFormData } from "../types/Question";
import { IQuestionnaireResponseRepository } from "../interfaces/IQuestionnaireResponseRepository";
import { createCtx, createApp, startApp, Resource, Manifest, CtxProps, ManifestOperation } from "@aidbox/node-server-sdk";
import { createConfig } from "@aidbox/node-server-sdk";
import { createHelpers } from "../config/helpers";
import { request } from "express";
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
            const operations = await this._questionRepo.getQuestionnair();
            return operations;
        }catch(err){
            console.log("err",err);
            throw new InternalServerError('An error occurred while interacting with the database');
        }
    }
    
    async storeQuestionnaireResponse(question: QuestionnaireResponse): Promise<any> {
        try{
            const operations = await this._questionRepo.storeQuestionnaireResponse(question);
            return operations;
        }catch(err){
            console.log("err",err);
            throw new InternalServerError('An error occurred while interacting with the database');
        }
    }   
}