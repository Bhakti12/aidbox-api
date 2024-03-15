// import appRoot from 'app-root-path';
import * as dotenv from "dotenv";

dotenv.config();


// dotenv.config({ path: `${appRoot}/.env` });

export const config = {
    // APP_ROOT: appRoot.path,
    AIDBOX_CLIENT_ID: process.env.AIDBOX_CLIENT_ID,
    AIDBOX_CLIENT_SECRET: process.env.AIDBOX_CLIENT_SECRET,
    TOKEN_ISSUER: process.env.TOKEN_ISSUER,
    TOKEN_AUDIENCE: process.env.TOKEN_AUDIENCE,
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
    ACCESS_TOKEN_EXPIRES_IN: process.env.ACCESS_TOKEN_EXPIRES_IN,
    REFRESH_TOKEN_EXPIRES_IN: process.env.REFRESH_TOKEN_EXPIRES_IN,

    API_ROOT: `${process.env.API_ROOT}/v${process.env.VERSION}`,
    AIDBOX_URL : process.env.AIDBOX_URL,
    NODE_ENV: process.env.NODE_ENV,

    APP_BASE_URL: process.env.APP_BASE_URL,
    APP_NAME: process.env.APP_NAME,
    VERSION: process.env.VERSION,

    HOST: process.env.HOST,
    PORT: process.env.PORT,

    DB_HOST: process.env.DB_HOST,
    DB_PORT: process.env.DB_PORT,
    DB_NAME: process.env.DB_NAME,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_SCHEMA: process.env.DB_SCHEMA,
    DB_PREFIX: process.env.DB_PREFIX,

    VERIFICATION_EMAIL_TTL_IN_MINUTES: process.env.VERIFICATION_EMAIL_TTL_IN_MINUTES,
    VERIFICATION_OTP_TTL_IN_MINUTES: process.env.VERIFICATION_OTP_TTL_IN_MINUTES,

    PROFILE_PICTURE_LIMIT_IN_MB: parseInt(process.env.PROFILE_PICTURE_LIMIT_IN_MB!, 10),
    DOCUMENT_LIMIT_IN_MB: parseInt(process.env.DOCUMENT_LIMIT_IN_MB!, 10),
    VIDEO_LIMIT_IN_MB: parseInt(process.env.VIDEO_LIMIT_IN_MB!, 10),

    SES_SENDER_ADDRESS: process.env.SES_SENDER_ADDRESS,
    SES_NO_REPLY_ADDRESS: process.env.SES_NO_REPLY_ADDRESS!,
    AWS_ACCESS_KEY: process.env.AWS_ACCESS_KEY,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    AWS_DOCUMENT_BUCKET: process.env.AWS_DOCUMENT_BUCKET!,
    AWS_LIBRARY_BUCKET: process.env.AWS_LIBRARY_BUCKET!,
    AWS_PROFILE_BUCKET: process.env.AWS_PROFILE_BUCKET!,
    CACHE_SERVER_URL: process.env.CACHE_SERVER_URL!,
    AWS_S3_URL: process.env.AWS_S3_URL!,

    // AGORA
    AGORA_APP_ID: process.env.AGORA_APP_ID!,
    AGORA_APP_CERTIFICATE: process.env.AGORA_APP_CERTIFICATE!,

    // PubNub
    PUBNUB_PUBLISH_KEY: process.env.PUBNUB_PUBLISH_KEY,
    PUBNUB_SUBSCRIBE_KEY: process.env.PUBNUB_SUBSCRIBE_KEY,

    // CRYPTO
    IV: process.env.IV!,
    KEY: process.env.KEY!,

    // PUSHER
    PUSHER_INSTANCE_ID: process.env.PUSHER_INSTANCE_ID!,
    PUSHER_SECRET_KEY: process.env.PUSHER_SECRET_KEY!,
    DEEP_LINK_GUEST: process.env.DEEP_LINK_GUEST!,
    DEEP_LINK_CREATOR: process.env.DEEP_LINK_CREATOR!,
    KEY_ID: process.env.KEY_ID!,
    TEAM_ID: process.env.TEAM_ID!,
    FILE_PATH: process.env.FILE_PATH!,

    // Stripe
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY!,
    STRIPE_API_VERSION: process.env.STRIPE_API_VERSION!,

    // ResetPasswordUrl
    RESET_PASSWORD_URL: process.env.RESET_PASSWORD_URL!,

    // ChangePasswordUrl
    CHANGE_PASSWORD_URL: process.env.CHANGE_PASSWORD_URL!,

    ALLOW_CORS_DOMAIN: process.env.ALLOW_CORS_DOMAIN,

    // websocket events
    GUEST_EVENTS: {
        guestdocumentUpload: 'GUEST_DOCUMENT_UPLOAD',
        guestdocumentDelete: 'GUEST_DOCUMENT_DELETE',
        guestLogin: 'GUEST_LOGIN',
        guestRegister: 'GUEST_REGISTER',
        guestCreateMeeting: 'GUEST_CREATE_MEETING',
        guestAcceptMeeting: 'GUEST_ACCEPT_MEETING',
        guestDeclineMeeting: 'GUEST_DECLINE_MEETING',
        guestDeleteMeeting: 'GUEST_DELETE_MEETING',
        guestInitCall: 'GUEST_INIT_CALL',
    },
    CREATOR_EVENTS: {
        documentUpload: 'CREATOR_DOCUMENT_UPLOAD',
        documentDelete: 'CREATOR_DOCUMENT_DELETE',
        meetingCreate: 'CREATOR_MEETING_CREATE',
        meetingDelete: 'CREATOR_MEETING_DELETE',
        acceptMeeting: 'CREATOR_ACCEPT_MEETING',
        declineMeeting: 'CREATOR_DECLINE_MEETING',
        profileChange: 'CREATOR_PROFILE_CHANGE',
        rescheduleMeeting: 'CREATOR_RESCHEDULE_MEETING',
        documentShare: 'CREATOR_DOCUMENT_SHARE',
        documentUpdated: 'CREATOR_UPDATE_DOCUMENT',
        updateLink: 'CREATOR_UPDATE_LINK_DETAILS',
    },

    // Subscription Plan
    SUBSCRIPTION: {
        free: 'Free',
        pro: 'Pro',
        premium: 'Premium',
        enterprise: 'Enterprise',
    },

    // Video Call Actions
    VIDEO_CALL_ACTIONS: {
        CALL_INIT: 1,
        CALL_END: 2,
        CALL_MISSED: 3,
        CALL_CANCEL: 4,
        CALL_JOIN: 5,
        CALL_MINUTES: 6,
        CALL_MSG: 7,
        CALL_START: 8,
        CALL_MISSED_VIEW: 9,
    },

    // guest view document websocket actions
    GUEST_VIEW_DOC: 10,

    // User Type
    USER_TYPE: {
        ACCOUNT_USER: 1,
        GUEST: 2,
    },

    FFMPEG_PATH: process.env.FFMPEG_PATH,
    FFPROBE_PATH: process.env.FFPROBE_PATH,

    PIPEDRIVE_TOKEN: process.env.token,
    PIPEDRIVE_STRING: process.env.string,
    PIPEDRIVE_CLIENT_ID: process.env.PIPEDRIVE_CLIENT_ID,
    PIPEDRIVE_CLIENT_SECRET: process.env.PIPEDRIVE_CLIENT_SECRET,

    // google
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
    REDIRECT_URI: process.env.REDIRECT_URI,
};
