import {storeFormData} from "../types/Question";
import { TOperation } from "../config/helpers";
import { ManifestOperations } from "@aidbox/node-server-sdk";

export interface IQuestionnaireResponseRepository{
    getQuestionnair() : ManifestOperations;
    storeQuestionnaireResponse(question: any) : ManifestOperations;
}