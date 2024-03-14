import { checkSchema } from 'express-validator';

const createTransactionValidator = checkSchema({
    userId: {
        in: 'body',
        optional: true,
        isNumeric: {
            errorMessage: 'User ID must be a number.',
        },
    },
    organisationId: {
        in: 'body',
        optional: true,
        isNumeric: {
            errorMessage: 'Organisation ID must be a number.',
        },
    },
    subscriptionId: {
        in: 'body',
        exists: {
            errorMessage: 'Subscription ID is required.',
        },
        isNumeric: {
            errorMessage: 'Subscription ID must be a number.',
        },
    },
    status: {
        in: 'body',
        exists: {
            errorMessage: 'Status is required.',
        },
        notEmpty: {
            errorMessage: 'Status cannot be empty.',
        },
        isLength: {
            options: {
                max: 256,
            },
            errorMessage: 'Status cannot be longer than 256 characters.',
        },
        trim: true,
        stripLow: true,
    },
    transactionId: {
        in: 'body',
        exists: {
            errorMessage: 'Transaction ID is required.',
        },
        notEmpty: {
            errorMessage: 'Transaction ID cannot be empty.',
        },
        isLength: {
            options: {
                max: 256,
            },
            errorMessage: 'Transaction ID cannot be longer than 256 characters.',
        },
        trim: true,
        stripLow: true,
    },
    payload: {
        in: 'body',
        isJSON: {
            errorMessage: 'Payload must be of JSON type.',
        },
    },
});

export default createTransactionValidator;
