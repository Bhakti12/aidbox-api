import { checkSchema } from 'express-validator';

const loginValidator = checkSchema({
    userId: {
        in: 'body',
        exists: {
            errorMessage: 'User id is required.',
        },
        notEmpty: {
            errorMessage: 'User id cannot be empty.',
        },
        isNumeric: true,
        trim: true,
        stripLow: true,
    },
    refreshToken: {
        in: 'body',
        exists: {
            errorMessage: 'Refresh token is required.',
        },
        notEmpty: {
            errorMessage: 'Refresh token cannot be empty.',
        },
        trim: true,
        stripLow: true,
    },
});

export default loginValidator;
