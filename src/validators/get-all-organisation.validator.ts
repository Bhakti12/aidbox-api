import { checkSchema } from 'express-validator';

const getAllOrganisation = checkSchema({
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
    suspended: {
        in: 'query',
        exists: {
            errorMessage: 'Suspended is required.',
        },
        notEmpty: {
            errorMessage: 'Suspended cannot be empty.',
        },
        isBoolean: {
            errorMessage: 'Suspended contains only true or false value.',
        },
    },
    subscription: {
        in: 'query',
        exists: {
            errorMessage: 'subscription is required.',
        },
        notEmpty: {
            errorMessage: 'subscription cannot be empty.',
        },
        isBoolean: {
            errorMessage: 'Subscription contains only true or false value.',
        },
    },
});

export default getAllOrganisation;
