import { Manifest } from "@aidbox/node-server-sdk";
import {storeFormData,QuestionnaireResponse,Parameters} from "../types/Question";

export interface IQuestionnaireResponseService{
    getQuestionnair() : Promise<any>;
    storeQuestionnaireResponse(question: QuestionnaireResponse) : Promise<any>;
    generateLink(formdetails: Parameters): Promise<any>;
    shareForm(url:string,outpath:string) : Promise<any>;
}