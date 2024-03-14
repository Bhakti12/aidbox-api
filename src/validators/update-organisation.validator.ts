import { checkSchema } from 'express-validator';

const updateOrganisation = checkSchema({
    id: {
        in: 'params',
        exists: {
            errorMessage: 'Organisation Id is required.',
        },
        notEmpty: {
            errorMessage: 'Organisation Id cannot be empty.',
        },
        isInt: {
            errorMessage: 'Organisation Id contains only integer value.',
        },
    },
    name: {
        in: 'body',
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
        trim: true,
        stripLow: true,
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

export default updateOrganisation;
