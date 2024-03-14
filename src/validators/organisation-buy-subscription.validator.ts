import { checkSchema } from 'express-validator';

const organisationBuySubscription = checkSchema({
    organisationId: {
        in: 'params',
        exists: {
            errorMessage: 'organisationId is required.',
        },
        notEmpty: {
            errorMessage: 'organisationId cannot be empty.',
        },
        isInt: {
            errorMessage: 'organisationId contains only integer Value.',
        },
        trim: true,
    },
    subscriptionId: {
        in: 'params',
        exists: {
            errorMessage: 'subscriptionId is required.',
        },
        notEmpty: {
            errorMessage: 'subscriptionId cannot be empty.',
        },
        isInt: {
            errorMessage: 'subscriptionId contains only integer Value.',
        },
        trim: true,
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

export default organisationBuySubscription;
