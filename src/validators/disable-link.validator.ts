import { checkSchema } from 'express-validator';

const disableLink = checkSchema({
    id: {
        in: 'params',
        exists: {
            errorMessage: 'LinkId is required.',
        },
        notEmpty: {
            errorMessage: 'LinkId cannot be empty.',
        },
    },
    state: {
        in: 'query',
        exists: {
            errorMessage: 'State is required.',
        },
        notEmpty: {
            errorMessage: 'State cannot be empty.',
        },
        isBoolean: {
            errorMessage: 'State contain only true or false.',
        },
        trim: true,
    },
});

export default disableLink;
