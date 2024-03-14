import { AccountStatus, Currency, PrePaid, Prisma } from '@prisma/client';

/* eslint-disable @typescript-eslint/no-explicit-any */
export declare type CreateUserPayload = {
    firstName: string;
    lastName: string;
    emailId: string;
    salt: string;
    password: string;
    jobTitle: string | null;
    country: string | null;
    mobileNumber: string | null;
    profilePictureUri: string;
    pubnubUUID: string | null;
    timezoneId: BigInt | null;
    subscriptionId?: any;
    isMonthly?: boolean | null;
};

export declare type UpdateUserPayload = {
    firstName: string | undefined;
    lastName: string | undefined;
    jobTitle: string | undefined;
    country: string | undefined;
    mobileNumber: string | null;
    profilePictureUri: string | undefined;
    subscriptionId: any;
    isMonthly: boolean | null;
};

export declare type GetUserWithSubscription = {
    meta: {
        total: number;
    };
    User: {
        id: BigInt;
        firstName: string;
        lastName: string;
        emailId: string;
        jobTitle: string | null;
        country: string | null;
        mobileNumber: string | null;
        emailVerifiedAt: Date | null;
        mobileVerifiedAt: Date | null;
        isSuspended: boolean;
        lastLoginAt: Date | null;
        lastLogoutAt: Date | null;
        profilePictureUri: string | null;
        pubnubUUID: string;
        createdBy: BigInt | null;
        createdAt: Date;
        updatedAt: Date | null;
        deletedAt: Date | null;
        UserSubscription: any | null;
    }[];
};

export declare type GetUser = {
    id: BigInt;
    firstName: string;
    lastName: string;
    emailId: string;
    jobTitle: string | null;
    country: string | null;
    mobileNumber: string | null;
    emailVerifiedAt: Date | null;
    mobileVerifiedAt: Date | null;
    isSuspended: boolean;
    lastLoginAt: Date | null;
    lastLogoutAt: Date | null;
    profilePictureUri: string | null;
    pubnubUUID: string;
    createdBy: BigInt | null;
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;
    UserTimezone?: any | null;
    timezoneId?: BigInt | null;
    Subscription?: any | null;
    subscriptionId?: any | null;
    subscriptionName?: any | null;
};

export declare type GetRole = {
    id: BigInt;
    name: string;
    description: string | null;
    createdBy: BigInt;
};

export declare type AsignRole = {
    // id: BigInt
    // userId: BigInt
    // roleId: BigInt
    name: string;
};

export declare type timezones = {
    meta: {
        total: number;
    };
    timezone: {
        id: BigInt;
        timeZoneName: string;
        location: string;
        offset: string;
    }[];
};

export declare type GetUserSubscription = {
    id: BigInt;
    name: string;
    description: string;
    numberOfUsers: number | null;
    numberOfLinks: number;
    storageLimitInBytes: BigInt;
    voiceMinutes: BigInt;
    videoMinutes: BigInt;
    isActive: boolean;
    monthlySubscriptionPrice: Prisma.Decimal | null;
    yearlySubscriptionPrice: Prisma.Decimal | null;
    createdAt: Date;
    deletedAt: Date | null;
    isApplicableToOrganisation?: boolean;
};

export declare type NewAccountUser = {
    name: string;
    emailId: string;
    salt: string;
    password: string;
    jobTitle: string | null;
    companyName: string;
    timezoneId: BigInt | null;
    subscriptionId: BigInt;
    mobileNumber: string | null;
    profilePictureUri: string | null;
    pubnubUUID: string;
    stripePriceId: string;
    isMonthly: boolean;
    noOfUsers: number;
    prePaid: PrePaid;
    currency: Currency;
};

export declare type CreateAccount = {
    id: BigInt;
    name: string;
    status: AccountStatus;
    isCreatedByAdmin: boolean;
    stripeCustomerId: string | null;
    stripeSessionId: string | null;
    prePaid: PrePaid;
};

export declare type CreateAccountUser = {
    name: string;
    emailId: string;
    salt: string;
    password: string;
    jobTitle: string | null;
    companyName: string | null;
    timezoneId: BigInt | null;
    accountId: BigInt;
    mobileNumber: string | null;
    profilePictureUri: string | null;
    pubnubUUID: string;
    userUUID: string | null;
};

export declare type GetAccountUser = {
    mainRecipientName?: string;
    isDisabled?: boolean;
    id: BigInt;
    name: string;
    emailId: string;
    jobTitle: string | null;
    companyName: string | null;
    timezoneId: BigInt | null;
    accountId: BigInt;
    mobileNumber: string | null;
    profilePictureUri: string | null;
    companyLogoUri: string | null;
    pubnubUUID: string;
    userUUID: string | null;
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;
    isSuspended?: boolean;
    ipAddress?:string | null;
};

export declare type CreateAccountSubscription = {
    accountId: BigInt;
    subscriptionId: BigInt;
    subscriptionName: string;
    renewCycle: string;
    cost: Prisma.Decimal;
    numberOfUsersPerMonth: number;
    numberOfLinksPerMonth: number;
    storageLimitInBytesPerMonth: BigInt;
    totalStorageLimitInBytes: BigInt;
    voiceMinutesPerMonth: BigInt;
    videoMinutesPerMonth: BigInt;
    startAt: Date;
    endsAt: Date;
    startDate: number;
    stripePriceId: string;
    isUnlimited: boolean;
    isMultipleUserLicense: boolean;
    currency: Currency;
};

export declare type CreateAccountSubscriptionLog = {
    accountSubscriptionId: BigInt;
    subscriptionName: string;
    renewCycle: string;
    cost: Prisma.Decimal;
    numberOfUsersPerMonth: number;
    numberOfLinksPerMonth: number;
    storageLimitInBytesPerMonth: BigInt;
    totalStorageLimitInBytes: BigInt;
    voiceMinutesPerMonth: BigInt;
    videoMinutesPerMonth: BigInt;
    startAt: Date;
    endsAt: Date;
    stripePriceId: string;
};

export declare type CreateAddAcountUser = {
    accountId: BigInt;
    name: string;
    emailId: string;
    salt: string;
    password: string;
    jobTitle: string | null;
    companyName: string | null;
    timezoneId: BigInt | null;
    mobileNumber: string | null;
    pubnubUUID: string;
    profilePictureUri: string | null;
};

export declare type UpdateAccountSubscriptionUsage = {
    totalNumberOfUsersCreated: number;
    totalNumberOfLinksCreated: number;
    totalUsedStorageInBytes: BigInt;
    totalUsedVoiceMinutes: BigInt;
    totalUsedVideoMinutes: BigInt;
};

export declare type UpdateAcountUser = {
    name: string;
    emailId: string;
    jobTitle: string | null;
    timezoneId: BigInt | null;
    mobileNumber: string | null;
    profilePictureUri: string | null;
    companyName: string;
    companyLogoUri: string | null;
};

export declare type GetAllAcountUser = {
    meta: {
        total: number;
    };
    AccountUser: {
        id: BigInt;
        name: string;
        emailId: string;
        jobTitle: string | null;
        companyName: string | null;
        timezoneId: BigInt | null;
        accountId: BigInt;
        mobileNumber: string | null;
        profilePictureUri: string | null;
        pubnubUUID: string;
        createdAt: Date;
        updatedAt: Date | null;
        deletedAt: Date | null;
        timeZoneName: string;
    }[];
};

export declare type AdminGetAllAcountUser = {
    id: BigInt;
    name: string;
    emailId: string;
    jobTitle: string | null;
    companyName: string | null;
    timezoneId: BigInt | null;
    accountId: BigInt;
    mobileNumber: string | null;
    profilePictureUri: string | null;
    pubnubUUID: string;
    createdAt: Date;
    updatedAt: Date | null;
    deletedAt: Date | null;
}[];

export declare type UpdateAccount = {
    name: string;
    emailId: string;
    jobTitle: string | null;
    companyName: string;
    timezoneId: BigInt | null;
    mobileNumber: string | null;
    profilePictureUri: string | null;
};

export declare type CreateAccountInvoice = {
    // id: BigInt;
    accountSubscriptionId: BigInt;
    subscriptionName: string | null;
    interval: string | null;
    invoiceNumber: string;
    invoiceDate: Date;
    billingStartDate: Date;
    billingEndDate: Date;
    status: string;
    invoiceAmount: Prisma.Decimal;
    invoiceURL: string;
    downloadedInvoiceUrl: string | null;
    // createdAt: Date;
};

export declare type CreateAccountMonthlySubscription = {
    accountUserId: BigInt;
    month: number;
    year: number;
    monthlyNumberOfLinksCreated: number;
    monthlyUsedStorageInBytes: BigInt;
    monthlyUsedVoiceMinutes: BigInt;
    monthlyUsedVideoMinutes: BigInt;
    monthlyAccessedLink: BigInt;
};

export declare type GetAccountMonthlySubscription = {
    id: BigInt;
    month: number;
    year: number;
    monthlyNumberOfLinksCreated: number;
    monthlyUsedStorageInBytes: BigInt;
    monthlyUsedVoiceMinutes: BigInt;
    monthlyUsedVideoMinutes: BigInt;
    monthlyAccessedLink: BigInt;
    createdAt: Date;
    updatedAt: Date | null;
};

export declare type GetDashboardData = {
    totalDataUploaded: BigInt;
    totalChannelsCreated: BigInt;
    totalAccountsCreated: BigInt;
    totalChannelAccessed: BigInt;
    totalMonthlyUsage: any;
};

export declare type TotalDashBoardDataPerMonth = {
    month: number;
    year: number;
    monthlyUsedTotalStorage: BigInt;
    monthlyNumberOfLinksCreated: BigInt;
    monthlyNumberOfUsersCreated: BigInt;
    monthlyAccessedLink: BigInt;
};

export declare type GetAccountSubscriptionTotalUsage = {
    id: BigInt;
    createdAt: Date;
    updatedAt: Date | null;
    totalNumberOfUsersCreated: number;
    totalNumberOfLinksCreated: number;
    totalUsedStorageInBytes: BigInt;
    totalUsedVoiceMinutes: BigInt;
    totalUsedVideoMinutes: BigInt;
};

export declare type SubscriptionTotalUsage = {
    id?: BigInt;
    accountSubscriptionId?: BigInt;
    createdAt?: Date;
    updatedAt?: Date | null;
    totalNumberOfUsersCreated?: number;
    totalNumberOfLinksCreated?: number;
    totalUsedStorageInBytes?: BigInt;
    totalUsedVoiceMinutes?: BigInt;
    totalUsedVideoMinutes?: BigInt;
    totalUsedStorage?: BigInt;
};

export declare type AdminUsers = {
    id: BigInt;
    accountId: BigInt;
    name: string;
    companyName: string;
    emailId: string;
    users: number;
    subscriptionName: string;
    status: string;
    createdAt: Date;
};

export declare type CreateAccountUserSubscriptionMonthlyCycleUsage = {
    // id: BigInt;
    accountUserId: BigInt;
    cycleStartAt: Date;
    cycleEndsAt: Date;
    numberOfLinksCreated: number;
    usedStorageInBytes: BigInt;
    usedVoiceMinutes: BigInt;
    usedVideoMinutes: BigInt;
    // createdAt: Date;
    // updatedAt: Date | null;
};

export declare type UpdateAccountUserSubscriptionMonthlyCycleUsage = {
    // id: BigInt;
    accountUserId: BigInt;
    cycleStartAt: Date;
    cycleEndsAt: Date;
    numberOfLinksCreated: number;
    usedStorageInBytes: BigInt;
    usedVoiceMinutes: BigInt;
    usedVideoMinutes: BigInt;
    // createdAt: Date;
    // updatedAt: Date | null;
};

export declare type GetAccountUserSubscriptionMonthlyCycleUsage = {
    id: BigInt;
    accountUserId: BigInt;
    cycleStartAt: Date;
    cycleEndsAt: Date;
    numberOfLinksCreated: number;
    usedStorageInBytes: BigInt;
    usedVoiceMinutes: BigInt;
    usedVideoMinutes: BigInt;
    createdAt: Date;
    updatedAt: Date | null;
};

export declare type GetAccountTotalUsage = {
    id: BigInt;
    accountId: BigInt;
    numberOfUsersCreated: number;
    numberOfLinksCreated: number;
    usedStorageInBytes: BigInt;
    usedVoiceMinutes: BigInt;
    usedVideoMinutes: BigInt;
    createdAt: Date;
    updatedAt: Date | null;
};

export declare type CreateAccountUserTotalUsage = {
    // id: BigInt;
    accountUserId: BigInt;
    totalNumberOfLinksCreated: number;
    totalUsedStorageInBytes: BigInt;
    totalUsedVoiceMinutes: BigInt;
    totalUsedVideoMinutes: BigInt;
    // createdAt: Date;
    // updatedAt: Date | null;
};

export declare type UpdateAccountUserTotalUsage = {
    // id: BigInt;
    // accountUserId: BigInt;
    totalNumberOfLinksCreated: number;
    totalUsedStorageInBytes: BigInt;
    totalUsedVoiceMinutes: BigInt;
    totalUsedVideoMinutes: BigInt;
    // createdAt: Date;
    // updatedAt: Date | null;
};

export declare type GetAccountUserTotalUsage = {
    id: BigInt;
    accountUserId: BigInt;
    totalNumberOfLinksCreated: number;
    totalUsedStorageInBytes: BigInt;
    totalUsedVoiceMinutes: BigInt;
    totalUsedVideoMinutes: BigInt;
    createdAt: Date;
    updatedAt: Date | null;
};
export declare type Id = {
    id: BigInt;
}[];
export declare type GetAccountChange = {
    AccountUser: Id;
};

export type GetUserPerWithRole = {
    id: BigInt;
    name: string;
    emailId: string;
    salt: string;
    password: string;
    jobTitle: string | null;
    companyName: string | null;
    timezoneId: BigInt | null;
    accountId: BigInt;
    mobileNumber: string | null;
    emailVerifiedAt: Date | null;
    mobileVerifiedAt: Date | null;
    isSuspended: boolean;
    lastLoginAt: Date | null;
    lastLogoutAt: Date | null;
    profilePictureUri: string | null;
    companyLogoUri: string | null;
    pubnubUUID: string;
    iosDeviceToken: string | null;
    createdAt: Date;
    userUUID: string | null;
    updatedAt: Date | null;
    deletedAt: Date | null;
    isAdmin: boolean;
    isMultipleUserLicense: boolean;
};

export type GetAccountUserLinks = {
    Link: {
        id: BigInt;
        mainRecipientName: string;
        companyName: string | null;
        recipientEmailId: string | null;
        uri: string;
        accessCode: string | null;
        createdBy: BigInt;
        pubnubChannelUUID: string | null;
        agoraVoiceChannelUUID: string | null;
        agoraVideoChannelUUID: string | null;
        createdAt: Date;
        lastUpdatedAt: Date | null;
        isDisabled: boolean;
        missedCallCount: number;
        creatorPubnubUUID?: string;
        ChannelAnalytics: {
            viewCount: number;
        }[];
    }[];
};
