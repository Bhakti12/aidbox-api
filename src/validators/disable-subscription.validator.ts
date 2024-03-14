import { checkSchema } from 'express-validator';

const disableSubscription = checkSchema({
    id: {
        in: 'params',
        exists: {
            errorMessage: 'SubscriptionId is required.',
        },
        notEmpty: {
            errorMessage: 'SubscriptionId cannot be empty.',
        },
        isInt: {
            errorMessage: 'SubscriptionId contains only integer Value.',
        },
    },
    state: {
        in: 'query',
        exists: {
            errorMessage: 'state is required.',
        },
        notEmpty: {
            errorMessage: 'state cannot be empty.',
        },
        isBoolean: {
            errorMessage: 'state contains only true or false.',
        },
    },
});

export default disableSubscription;
