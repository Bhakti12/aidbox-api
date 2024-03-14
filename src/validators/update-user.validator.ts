/* eslint-disable max-len */
import { checkSchema } from 'express-validator';

const updateUserValidatior = checkSchema({
    id: {
        in: 'params',
        exists: {
            errorMessage: 'UserId is required.',
        },
        notEmpty: {
            errorMessage: 'UserId cannot be empty.',
        },
        isInt: {
            errorMessage: 'UserId contains only integer Value.',
        },
        trim: true,
    },
    firstName: {
        in: 'body',
        exists: {
            errorMessage: 'First name is required.',
        },
        notEmpty: {
            errorMessage: 'First name cannot be empty.',
        },
        isLength: {
            options: {
                min: 1,
                max: 150,
            },
            errorMessage: 'First name cannot be longer than 150 characters.',
        },
        isAlpha: {
            errorMessage: 'First name cannot contain any special characters.',
        },
        trim: true,
        stripLow: true,
    },
    lastName: {
        in: 'body',
        exists: {
            errorMessage: 'Last name is required.',
        },
        notEmpty: {
            errorMessage: 'Last name cannot be empty.',
        },
        isLength: {
            options: {
                min: 1,
                max: 150,
            },
            errorMessage: 'Last name cannot be longer than 150 characters.',
        },
        isAlpha: {
            errorMessage: 'Last name cannot contain any special characters.',
        },
        trim: true,
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
    country: {
        in: 'body',
        optional: true,
        isLength: {
            options: {
                max: 150,
            },
            errorMessage: 'Country name should be less than 150 characters.',
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
});

export default updateUserValidatior;
