import { checkSchema } from 'express-validator';

const userStateChange = checkSchema({
    id: {
        in: 'params',
        exists: {
            errorMessage: 'Id is required.',
        },
        notEmpty: {
            errorMessage: 'Id cannot be empty.',
        },
        isInt: {
            errorMessage: 'Id contains only integer Value.',
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

export default userStateChange;
