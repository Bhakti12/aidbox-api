import { checkSchema } from 'express-validator';

const getAccount = checkSchema({
    id: {
        in: 'params',
        exists: {
            errorMessage: 'Account Id is required.',
        },
        trim: true,
        notEmpty: {
            errorMessage: 'Account Id cannot be empty.',
        },
        isInt: {
            errorMessage: 'Account Id contains only integer Value.',
        },
    },
});

export default getAccount;
