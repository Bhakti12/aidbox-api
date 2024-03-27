export declare type Subscription = {
    meta:Meta;
    criteria:string;
    channel:Channel;
    resourceType:string;
    reason:string;
    status:string;
    id:string;
    end:string;
};

export declare type Meta = {
    profile:Array<string>;
};

export declare type Channel = {
    extension?:Extension[];
    type:string;
    endpoint:string;
    payload:string;
    _payload?:{extension?:Extension[]};
};

export declare type Extension = {
    url:string;
    valueUnsignedInt?:number;
    valuePositiveInt?:number;
    valueCode?:string;
};