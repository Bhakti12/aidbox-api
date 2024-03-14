import { checkSchema } from 'express-validator';

const getAllUserValidator = checkSchema({
    page: {
        in: 'query',
        optional: true,
        notEmpty: {
            errorMessage: 'Page cannot be empty.',
        },
        isInt: {
            errorMessage: 'Page contains only Integer Value.',
        },
        trim: true,
    },
    size: {
        in: 'query',
        optional: true,
        notEmpty: {
            errorMessage: 'Size cannot be empty.',
        },
        isInt: {
            errorMessage: 'Size contains only Integer Value.',
        },
        trim: true,
    },
    subscription: {
        in: 'query',
        optional: true,
        isBoolean: {
            errorMessage: 'Subscription must be a boolean value.',
        },
    },
});

export default getAllUserValidator;
