import { checkSchema } from 'express-validator';

const sendVerificationMail = checkSchema({
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
});

export default sendVerificationMail;
