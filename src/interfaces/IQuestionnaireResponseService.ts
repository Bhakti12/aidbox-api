import { Manifest } from "@aidbox/node-server-sdk";
import {storeFormData,QuestionnaireResponse} from "../types/Question";

export interface IQuestionnaireResponseService{
    getQuestionnair() : Promise<any>;
    storeQuestionnaireResponse(question: QuestionnaireResponse) : Promise<any>;
}