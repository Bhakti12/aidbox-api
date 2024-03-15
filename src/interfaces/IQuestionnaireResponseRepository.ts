import {storeFormData,QuestionnaireResponse} from "../types/Question";
import { TOperation } from "../config/helpers";
import { ManifestOperations } from "@aidbox/node-server-sdk";

export interface IQuestionnaireResponseRepository{
    getQuestionnair() : Promise<any>;
    storeQuestionnaireResponse(question: QuestionnaireResponse) : Promise<any>;
}