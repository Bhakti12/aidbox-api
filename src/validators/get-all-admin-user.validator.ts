import { checkSchema } from 'express-validator';

const getAllAdminUserValidator = checkSchema({
    page: {
        in: 'query',
        trim: true,
        optional: true,
        notEmpty: {
            errorMessage: 'Page cannot be empty.',
        },
        isInt: {
            errorMessage: 'Page contains only Integer Value.',
        },
    },
    size: {
        in: 'query',
        trim: true,
        optional: true,
        notEmpty: {
            errorMessage: 'Size cannot be empty.',
        },
        isInt: {
            errorMessage: 'Size contains only Integer Value.',
        },
    },
});

export default getAllAdminUserValidator;
