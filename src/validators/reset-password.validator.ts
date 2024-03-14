/* eslint-disable max-len */
import { checkSchema } from 'express-validator';

const resetPasswordValidator = checkSchema({
    userId: {
        in: 'query',
        exists: {
            errorMessage: 'User id is required.',
        },
        trim: true,
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
            },
            errorMessage: 'Password should be mininum 8 characters long.',
        },
        trim: true,
        stripLow: true,
    },
    nonce: {
        in: 'query',
        exists: {
            errorMessage: 'Nonce is required.',
        },
        trim: true,
        stripLow: true,
    },
});

export default resetPasswordValidator;
