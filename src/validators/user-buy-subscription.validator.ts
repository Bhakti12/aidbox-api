import { checkSchema } from 'express-validator';

const userBuySubscription = checkSchema({
    userId: {
        in: 'params',
        exists: {
            errorMessage: 'UserId is required.',
        },
        notEmpty: {
            errorMessage: 'UserId cannot be empty.',
        },
        isInt: {
            errorMessage: 'UserId contains only integer Value.',
        },
        trim: true,
    },
    subscriptionId: {
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
    isMonthly: {
        in: 'query',
        exists: {
            errorMessage: 'isMonthly is required',
        },
        notEmpty: {
            errorMessage: 'isMonthly cannot be empty',
        },
        isBoolean: {
            errorMessage: 'isMonthly flag contains only true or false',
        },
    },
});

export default userBuySubscription;
