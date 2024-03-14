import { checkSchema } from 'express-validator';

const getTransactionsValidator = checkSchema({
    userId: {
        in: 'query',
        optional: true,
        isNumeric: {
            errorMessage: 'User ID must be a number.',
        },
    },
    organisationId: {
        in: 'query',
        optional: true,
        isNumeric: {
            errorMessage: 'Organisation ID must be a number.',
        },
    },
});

export default getTransactionsValidator;
