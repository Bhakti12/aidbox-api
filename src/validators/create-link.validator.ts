import { checkSchema } from 'express-validator';

const createLink = checkSchema({
    mainRecipientName: {
        in: 'body',
        trim: true,
        exists: {
            errorMessage: 'RecipientName is required.',
        },
        notEmpty: {
            errorMessage: 'RecipientName cannot be empty.',
        },
        isLength: {
            options: {
                max: 256,
            },
            errorMessage: 'RecipientName cannot be longer than 256 characters.',
        },
        stripLow: true,
    },
    companyName: {
        in: 'body',
        trim: true,
        optional: {
            options: {
                nullable: true,
            },
        },
    },
    recipientEmailId: {
        in: 'body',
        trim: true,
        toLowerCase: true,
        optional: {
            options: {
                nullable: true,
            },
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
    accessCode: {
        in: 'body',
        trim: true,
        optional: {
            options: {
                nullable: true,
            },
        },
        isAlphanumeric: {
            errorMessage: 'Access Code cannot have special characters.',
        },
    },
    createdBy: {
        in: 'body',
        exists: {
            errorMessage: 'Created By is required.',
        },
        notEmpty: {
            errorMessage: 'Created By cannot be empty.',
        },
        isInt: {
            errorMessage: 'Created By contain only integer value.',
        },
    },
    tagLine: {
        in: 'body',
        trim: true,
        optional: {
            options: {
                nullable: true,
            },
        },
        isLength: {
            options: {
                max: 256,
            },
        },
    },
});

export default createLink;
