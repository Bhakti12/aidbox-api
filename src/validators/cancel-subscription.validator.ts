import { checkSchema } from 'express-validator';

const cancelSubscription = checkSchema({
    accountId: {
        in: 'query',
        trim: true,
        exists: {
            errorMessage: 'AccountId is required.',
        },
        notEmpty: {
            errorMessage: 'AccountId cannot be empty.',
        },
        isInt: {
            errorMessage: 'AccountId is only integer Value.',
        },
    },
});

export default cancelSubscription;
