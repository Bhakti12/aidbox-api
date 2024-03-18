import { Manifest } from "@aidbox/node-server-sdk";
import {storeFormData,QuestionnaireResponse,Parameters, resourceInformation, careplanDetails, formtypesDetails, pathwayDetails, questionnaireDetails} from "../types/Question";

export interface IQuestionnaireResponseService{
    getQuestionnair() : Promise<any>;
    storeQuestionnaireResponse(question: QuestionnaireResponse) : Promise<any>;
    generateLink(formdetails: Parameters): Promise<any>;
    shareForm(url:string,outpath:string) : Promise<any>;
    makeCustomResource(resource:resourceInformation) : Promise<any>;
    addCareplanData(careplan:careplanDetails) : Promise<any>;
    addFormTypeData(formtype:formtypesDetails) : Promise<any>;
    addPathwayData(pathway:pathwayDetails) : Promise<any>;
    addQuestionnaireData(questionnaire:questionnaireDetails) : Promise<any>;
    getCareplan(): Promise<any>;
    getPathway(): Promise<any>;
    getFormType(): Promise<any>;
    getQuestionnaireResponse(): Promise<any>;
}