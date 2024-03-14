import { checkSchema } from 'express-validator';

const emailValidator = checkSchema({
    emailId: {
        in: 'query',
        toLowerCase: true,
        exists: {
            errorMessage: 'Email address is required.',
        },
        notEmpty: {
            errorMessage: 'Email address cannot be empty.',
        },
        isLength: {
            options: {
                min: 1,
                max: 256,
            },
        },
        isEmail: {
            errorMessage: 'Email id is invalid.',
        },
        trim: true,
        stripLow: true,
    },
});

export default emailValidator;
