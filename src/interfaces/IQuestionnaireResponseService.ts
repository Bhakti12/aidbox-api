import {storeFormData} from "../types/Question";

export interface IQuestionnaireResponseService{
    getQuestionnair() : any;
    storeQuestionnaireResponse(question: storeFormData) : Promise<any>;
}