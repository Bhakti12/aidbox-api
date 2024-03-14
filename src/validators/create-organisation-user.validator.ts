/* eslint-disable max-len */
import { checkSchema } from 'express-validator';

const addOrganisationUser = checkSchema({
    id: {
        in: 'params',
        exists: {
            errorMessage: 'Organisation Id is required.',
        },
        notEmpty: {
            errorMessage: 'Organisation Id cannot be empty.',
        },
        isInt: {
            errorMessage: 'Organisation Id contains only integer value.',
        },
    },
    is_admin: {
        in: 'query',
        exists: {
            errorMessage: 'is_admin flag is required.',
        },
        notEmpty: {
            errorMessage: 'is_admin flag cannot be empty.',
        },
        isBoolean: {
            errorMessage: 'is_admin contains only true or false value.',
        },
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
                max: 20,
            },
            errorMessage: 'Password should be between 8 to 20 characters.',
        },
        matches: {
            options: RegExp('/^(?=.*d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/', 'i').compile(),
            errorMessage:
                'Password should be combination of one uppercase , one lower case, one special char, one digit and min 8 , max 20 characters long',
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
    mobileNumber: {
        in: 'body',
        exists: {
            errorMessage: 'Mobile number is required.',
        },
        notEmpty: {
            errorMessage: 'Mobile number cannot be empty.',
        },
        isLength: {
            options: {
                min: 1,
                max: 15,
            },
            errorMessage: 'Mobile number should not be more than 15 characters long.',
        },
        trim: true,
        stripLow: true,
    },
    profilePicture: {
        in: 'body',
    },
    timezoneId: {
        in: 'body',
        exists: {
            errorMessage: 'Timezone Id is required.',
        },
        notEmpty: {
            errorMessage: 'Timezone Id cannot be empty.',
        },
        isInt: {
            errorMessage: 'Timezone Id contain only integer value.',
        },
    },
});

export default addOrganisationUser;
