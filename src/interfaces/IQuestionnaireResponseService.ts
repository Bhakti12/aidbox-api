import { Manifest } from "@aidbox/node-server-sdk";
import {storeFormData} from "../types/Question";

export interface IQuestionnaireResponseService{
    getQuestionnair() : any;
    storeQuestionnaireResponse(question: any) : Promise<any>;
}