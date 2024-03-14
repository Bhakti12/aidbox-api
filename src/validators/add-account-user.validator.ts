/* eslint-disable max-len */
import { checkSchema } from 'express-validator';

const addAccountUser = checkSchema({
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
        trim: true,
        stripLow: true,
    },
    password: {
        in: 'body',
        exists: {
            errorMessage: 'Password is required.',
        },
        notEmpty: {
            errorMessage: 'Password cannot be empty.',
        },
        isLength: {
            options: {
                min: 8,
            },
            errorMessage: 'Password should be mininum 8 characters long.',
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
    // mobileNumber: {
    //     in: 'body',
    //     optional: true,
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
    //     optional: true,
    //     isInt: {
    //         errorMessage: 'Timezone Id contain only integer value.',
    //     },
    // },
    accountId: {
        in: 'body',
        exists: {
            errorMessage: 'accountId is required.',
        },
        notEmpty: {
            errorMessage: 'accountId cannot be empty.',
        },
        isInt: {
            errorMessage: 'accountId contain only integer value.',
        },
    },
});

export default addAccountUser;
