import { checkSchema } from 'express-validator';

const sendOtp = checkSchema({
    id: {
        in: 'params',
        trim: true,
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

export default sendOtp;
