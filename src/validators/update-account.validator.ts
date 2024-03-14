/* eslint-disable max-len */
import { checkSchema } from 'express-validator';

const cupdateAccountValidator = checkSchema({
    id: {
        in: 'params',
        exists: {
            errorMessage: 'Account Id is required.',
        },
        notEmpty: {
            errorMessage: 'Account Id cannot be empty.',
        },
        isInt: {
            errorMessage: 'Account Id contain only integer value.',
        },
    },
    name: {
        in: 'body',
        trim: true,
        exists: {
            errorMessage: 'Name is required.',
        },
        notEmpty: {
            errorMessage: 'Name cannot be empty.',
        },
        isLength: {
            options: {
                min: 1,
                max: 150,
            },
            errorMessage: 'Name cannot be longer than 150 characters.',
        },
        stripLow: true,
    },
    emailId: {
        in: 'body',
        trim: true,
        toLowerCase: true,
        exists: {
            errorMessage: 'Email address is required.',
        },
        notEmpty: {
            errorMessage: 'Email address cannot be empty.',
        },
        isLength: {
            options: {
                min: 1,
                max: 256,
            },
        },
        isEmail: {
            errorMessage: 'Email id is invalid.',
        },
        stripLow: true,
    },
    jobTitle: {
        in: 'body',
        optional: true,
        isLength: {
            options: {
                max: 150,
            },
            errorMessage: 'Job title should be less than 150 characters.',
        },
        trim: true,
        stripLow: true,
    },
    // mobileNumber: {
    //     in: 'body',
    //     exists: {
    //         errorMessage: 'Mobile number is required.',
    //     },
    //     notEmpty: {
    //         errorMessage: 'Mobile number cannot be empty.',
    //     },
    //     isLength: {
    //         options: {
    //             min: 1,
    //             max: 15,
    //         },
    //         errorMessage: 'Mobile number should not be more than 15 characters long.',
    //     },
    //     trim: true,
    //     stripLow: true,
    // },
    profilePicture: {
        in: 'body',
    },
    // timezoneId: {
    //     in: 'body',
    //     exists: {
    //         errorMessage: 'Timezone Id is required.',
    //     },
    //     notEmpty: {
    //         errorMessage: 'Timezone Id cannot be empty.',
    //     },
    //     isInt: {
    //         errorMessage: 'Timezone Id contain only integer value.',
    //     },
    // },
    subscriptionId: {
        in: 'body',
        exists: {
            errorMessage: 'Subscription is required.',
        },
        notEmpty: {
            errorMessage: 'Subscription cannot be empty.',
        },
        isInt: {
            errorMessage: 'Subscription Id contains only integer valu.',
        },
    },
    isMonthly: {
        in: 'body',
        exists: {
            errorMessage: 'isMonthly is required',
        },
        notEmpty: {
            errorMessage: 'isMonthly cannot be empty',
        },
        isBoolean: {
            errorMessage: 'isMonthly flag contains only true or false',
        },
    },
    stripePriceId: {
        in: 'body',
        trim: true,
        exists: {
            errorMessage: 'stripePriceId is required.',
        },
        notEmpty: {
            errorMessage: 'stripePriceId cannot be empty.',
        },
    },
    companyName: {
        in: 'body',
        trim: true,
        exists: {
            errorMessage: 'companyName is required.',
        },
        notEmpty: {
            errorMessage: 'companyName cannot be empty.',
        },
    },
    // prePaid: {
    //     in: 'body',
    //     trim: true,
    //     optional: {
    //         options: {
    //             nullable: true,
    //         },
    //     },
    // },
});

export default cupdateAccountValidator;
