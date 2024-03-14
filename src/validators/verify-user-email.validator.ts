import { checkSchema } from 'express-validator';

const verifyUserEmail = checkSchema({
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
    nonce: {
        in: 'params',
        exists: {
            errorMessage: 'nonce string is required.',
        },
        trim: true,
        notEmpty: {
            errorMessage: 'nonce string cannot be empty.',
        },
        stripLow: true,
    },
});

export default verifyUserEmail;
