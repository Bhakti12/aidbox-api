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