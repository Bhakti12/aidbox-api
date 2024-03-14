import { checkSchema } from 'express-validator';

const addDocumentToLink = checkSchema({
    id: {
        in: 'params',
        exists: {
            errorMessage: 'LinkId is required',
        },
        notEmpty: {
            errorMessage: 'LinkId cannot be empty',
        },
    },
    type: {
        in: 'body',
        exists: {
            errorMessage: 'Type is required',
        },
        notEmpty: {
            errorMessage: 'Type cannot be empty',
        },
        isAlpha: {
            errorMessage: 'Type cannot contains special characters',
        },
        trim: true,
    },
    name: {
        in: 'body',
        trim: true,
        exists: {
            errorMessage: 'Name is required',
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

export default addDocumentToLink;
