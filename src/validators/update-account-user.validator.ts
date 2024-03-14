import { checkSchema } from 'express-validator';

const updateAccountUser = checkSchema({
    id: {
        in: 'params',
        exists: {
            errorMessage: 'User Id is required.',
        },
        notEmpty: {
            errorMessage: 'User Id cannot be empty.',
        },
        isInt: {
            errorMessage: 'User Id contains only integer value.',
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
    profilePicture: {
        in: 'body',
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
});

export default updateAccountUser;
