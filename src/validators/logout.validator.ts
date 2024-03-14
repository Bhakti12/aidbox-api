import { checkSchema } from 'express-validator';

const loginValidator = checkSchema({
    userId: {
        in: 'body',
        exists: {
            errorMessage: 'Email address is required.',
        },
        notEmpty: {
            errorMessage: 'Email address cannot be empty.',
        },
        isNumeric: true,
        trim: true,
        stripLow: true,
    },
    refreshToken: {
        in: 'body',
        exists: {
            errorMessage: 'Password is required.',
        },
        notEmpty: {
            errorMessage: 'Password cannot be empty.',
        },
        trim: true,
        stripLow: true,
    },
});

export default loginValidator;
