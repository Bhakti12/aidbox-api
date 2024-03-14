import { checkSchema } from 'express-validator';

const addDocumentToLibrary = checkSchema({
    userId: {
        in: 'body',
        exists: {
            errorMessage: 'UserId is required.',
        },
        notEmpty: {
            errorMessage: 'UserId cannot be empty.',
        },
    },
    type: {
        in: 'body',
        exists: {
            errorMessage: 'Type is required.',
        },
        notEmpty: {
            errorMessage: 'Type cannot be empty.',
        },
        isAlpha: {
            errorMessage: 'Type cannot contains special characters.',
        },
        trim: true,
    },
    name: {
        trim: true,
        in: 'body',
        exists: {
            errorMessage: 'Name is required.',
        },
        notEmpty: {
            errorMessage: 'Name cannot be empty',
        },
        isLength: {
            options: {
                min: 1,
                max: 255,
            },
        },
    },
});

export default addDocumentToLibrary;
