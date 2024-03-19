import {storeFormData,QuestionnaireResponse,Parameters, resourceInformation, careplanDetails, formtypesDetails, pathwayDetails, questionnaireDetails} from "../types/Question";
import { TOperation } from "../config/helpers";
import { ManifestOperations } from "@aidbox/node-server-sdk";

export interface IQuestionnaireResponseRepository{
    getQuestionnair() : Promise<any>;
    storeQuestionnaireResponse(question: QuestionnaireResponse) : Promise<any>;
    generateLink(formdetails: Parameters): Promise<any>;
    shareForm(url:string,outpath:string) : Promise<any>;
    makeCustomResource(resource:resourceInformation) : Promise<any>;
    addCareplanData(careplanData:careplanDetails) : Promise<any>;
    addFormTypeData(formType:formtypesDetails) : Promise<any>;
    addPathwayData(pathway:pathwayDetails) : Promise<any>;
    updateQuestionnaireData(questionnaire:questionnaireDetails) : Promise<any>;
    getCareplan(): Promise<any>;
    getPathway(): Promise<any>;
    getFormType(): Promise<any>;
    getQuestionnaireResponse(): Promise<any>;
}