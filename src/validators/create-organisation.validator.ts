import { checkSchema } from 'express-validator';

const createOrganisation = checkSchema({
    name: {
        in: 'body',
        trim: true,
        exists: {
            errorMessage: 'Organisation name is required.',
        },
        notEmpty: {
            errorMessage: 'Organisation name cannot be empty.',
        },
        isLength: {
            options: {
                max: 150,
            },
            errorMessage: 'Organisation name cannot be longer than 150 characters.',
        },
        stripLow: true,
    },
    description: {
        in: 'body',
        optional: true,
    },
    subscriptionId: {
        in: 'body',
        exists: {
            errorMessage: 'Subscription is required.',
        },
        notEmpty: {
            errorMessage: 'Subscription cannot be empty.',
        },
        isInt: {
            errorMessage: 'Subscription Id contains only integer valu.',
        },
    },
    isMonthly: {
        in: 'body',
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

export default createOrganisation;
