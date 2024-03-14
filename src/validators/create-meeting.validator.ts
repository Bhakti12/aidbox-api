import { checkSchema } from 'express-validator';

const createMeeting = checkSchema({
    is_guest: {
        in: 'query',
        exists: {
            errorMessage: 'is_guest flag is required.',
        },
        notEmpty: {
            errorMessage: 'is_guest flag cannot be empty.',
        },
        isBoolean: {
            errorMessage: 'is_guest flag contains only true or false.',
        },
    },
    creatorId: {
        in: 'body',
        exists: {
            errorMessage: 'creatorId is required.',
        },
        notEmpty: {
            errorMessage: 'creatorId cannot be empty.',
        },
        isInt: {
            errorMessage: 'creatorId is only integer Value.',
        },
        trim: true,
    },
    linkId: {
        in: 'body',
        exists: {
            errorMessage: 'linkId is required.',
        },
        notEmpty: {
            errorMessage: 'linkId cannot be empty.',
        },
        trim: true,
    },
    title: {
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
            errorMessage: 'Title should not be more than 256 characters long.',
        },
    },
    description: {
        in: 'body',
        exists: {
            errorMessage: 'Description is required.',
        },
        trim: true,
    },
    meetAt: {
        in: 'body',
    },
});

export default createMeeting;
