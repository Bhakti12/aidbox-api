import { checkSchema } from 'express-validator';

const accountStateChange = checkSchema({
    id: {
        in: 'params',
        exists: {
            errorMessage: 'Account Id is required.',
        },
        notEmpty: {
            errorMessage: 'Account Id cannot be empty.',
        },
        isInt: {
            errorMessage: 'Account Id contains only integer Value.',
        },
        trim: true,
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

export default accountStateChange;
