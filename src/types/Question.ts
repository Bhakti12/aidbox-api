export declare type storeFormData = {
    client_name: string,
    DateOfBirth: string,
    Consent_to_allow_the_taking_of_pictures: boolean,
    agree_for_pictures: string,
    consent_for_communication: boolean,
    consent_for_emails: boolean,
    bayshore_telephone_number: string,
    e_mail: string,
    consent_to: boolean
};

export declare type QuestionnaireResponse = {
    resourceType: string;
    status: string;
    item: QuestionnaireItem[];
};

export declare type QuestionnaireItem = {
    text: string;
    answer: Answer[];
    linkId: string;
};

export declare type Answer = {
    value: {
        string?: string;
        boolean?: boolean;
    };
}

//for linkgenerate API

export declare type ValueReference = {
    id: string;
    resourceType: string;
};

export declare type Parameter = {
    name: string;
    valueReference?: ValueReference;
    valueBoolean?: boolean;
};

export declare type Parameters = {
    resourceType: string;
    parameter: Parameter[];
};

//for create custom resources

export declare type resourceInformation = {
    id : string;
    type : string;
    isOpen?: boolean;
};

//for add careplan data

export declare type careplanDetails = {
    diseaseDetails: string;
    careplanDetails: string;
};

//for add pathway details 

export declare type pathwayDetails = {
    pathway_name: string;
    careplan_id: string;
    form_type_ids: Array<string>;
};

//for add formtypes details

export declare type formtypesDetails = {
    form_name: string;
};

//for add questionnaire data

export declare type questionnaireDetails = {
    resourceType: string;
    status: string;
    id?: string;
    title: string;
    url: string;
    item: QuestionnaireDetails[],
    meta: MetaData
};

export declare type QuestionnaireDetails = {
    text: string;
    type: string;
    linkId: string;
    answerOptions?: answerOption[];
    extension?: Extension[]
};

export declare type Extension = {
    url?: string;
    valueInteger?: number;
    valueInstant?: string;
};

export declare type answerOption = {
    valueCoding: {
        code: string,
        system?: string,
        display: string
    }
};

export declare type MetaData = {
    lastUpdated: string,
    versionId: string,
    extension: Extension[]
};