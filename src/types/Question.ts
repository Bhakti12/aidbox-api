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
    questionnaire: string;
};

export declare type QuestionnaireItem = {
    text: string;
    answer: Answer[];
    linkId: string;
    item: QuestionnaireItem[];
};

export declare type Answer = {
    value: {
        string?: string;
        boolean?: boolean;
        number?: number;
        date?: string;
        coding?:codingans;
        attachment?:FileAttachment;
        uri?:string;
        time?:string;
        quantity?:string;
        reference?:string;
        item?:QuestionnaireItem[];
    };
}

export declare type FileAttachment = {
    creation?:string;
    contentType?:string;
    data?:string;
};

export declare type codingans = {
    code?:string;
    system?:string;
    display?:string;
};

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
    resourceType:string;
    status:string;
    intent:string;
    subject:Subject;
    title:string;
    description:string;
};

export declare type Subject = {
    resourceType?:string;
    type?:string;
    id?:string;
};

export declare type Coding = {
    system: string;
    code: number;
    display: string
};

//for add pathway details 

export declare type pathwayDetails = {
    resourceType: string;
    status: string;
    pathway_details: pathway_details;
};

export declare type pathway_details = {
    pathway_name: string;
};

//for add formtypes details

export declare type formtypesDetails = {
    resourceType: string;
    status: string;
    formDetails: formDetails;
};

export declare type formDetails = {
    form_name: string;
    form_code: string;
    description: string;
    form_fill_stage: string;
    form_filled_by: string;
    form_accessed_by: string;
};

//for add questionnaire data

export declare type questionnaireDetails = {
    resourceType: string;
    id: string;
    title: string;
    status: string;
    url: string;
    item: Qitem[];
    meta?: QMeta[];
};

export declare type QMeta = {
    lastUpdated?:string;
    versionId?:string;
    extension:QExtension[];
};

export declare type Qitem = {
    linkId?:string;
    text?:string;
    type?:string;
    extension?:QExtension;
    enableWhen?:QenableWhen;
    required?:boolean;
    disabled:{
        display?:string
    };
    enableBehavior?:string;
    initial?:QInitial[];
    item?:Qitem[];
};

export declare type QInitial = {
    value:{
        boolean?:boolean;
        decimal?:number;
        integer?:number;
        date?:string;
        datetime?:string;
        string?:string;
        uri?:string;
        attachment?:string;
        coding?:Coding[];
        quantity?:string;
        reference?:string;
    }
};

export declare type QExtension = {
    url?:string;
    value:{
        integer?:number;
        instant?:string;
    }  
};

export declare type QenableWhen = {
    question?:string;
    operation?:string;
    answer?:{
        boolean?:boolean;
        decimal?:number;
        integer?:number;
        date?:string;
        datetime?:string;
        time?:string;
        string?:string;
        quantity?:string;
        reference?:string;
        coding?:Coding;
    }
};