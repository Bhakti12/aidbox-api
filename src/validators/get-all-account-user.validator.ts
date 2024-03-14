import { checkSchema } from 'express-validator';

const getAllAccountUser = checkSchema({
    page: {
        in: 'query',
        exists: {
            errorMessage: 'page number is required.',
        },
        trim: true,
        notEmpty: {
            errorMessage: 'page number cannot be empty.',
        },
        isInt: {
            errorMessage: 'page number contains only integer Value.',
        },
    },
    size: {
        in: 'query',
        exists: {
            errorMessage: 'size is required.',
        },
        trim: true,
        notEmpty: {
            errorMessage: 'size cannot be empty.',
        },
        isInt: {
            errorMessage: 'size contains only integer Value.',
        },
    },
});

export default getAllAccountUser;
