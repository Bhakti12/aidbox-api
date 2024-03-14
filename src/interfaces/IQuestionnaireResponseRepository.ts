import {storeFormData} from "../types/Question";
import { TOperation } from "../config/helpers";
import { ManifestOperations } from "@aidbox/node-server-sdk";

export interface IQuestionnaireResponseRepository{
    getQuestionnair() : ManifestOperations;
    // storeQuestionnaireResponse(question: storeFormData) : Promise<TOperation<{resource: {
    //     client_name : string,
    //     DateOfBirth : string,
    //     Consent_to_allow_the_taking_of_pictures : boolean,
    //     agree_for_pictures : string,
    //     consent_for_communication : boolean,
    //     consent_for_emails : boolean,
    //     bayshore_telephone_number : string,
    //     e_mail : string,
    //     consent_to : boolean
    // }}>>;
}