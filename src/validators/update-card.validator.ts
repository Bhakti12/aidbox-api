import { checkSchema } from 'express-validator';

const updateCardValidator = checkSchema({
    nameOnCard: {
        in: 'body',
        trim: true,
        exists: {
            errorMessage: 'Name on card is required.',
        },
        notEmpty: {
            errorMessage: 'Name on card cannot be empty.',
        },
        stripLow: true,
    },
    expMonth: {
        in: 'body',
        trim: true,
        exists: {
            errorMessage: 'Expire month is required.',
        },
        notEmpty: {
            errorMessage: 'Expire month cannot be empty.',
        },
        isInt: {
            errorMessage: 'Expire month contains only integer value.',
        },
    },
    expYear: {
        in: 'body',
        trim: true,
        exists: {
            errorMessage: 'Expire year is required.',
        },
        notEmpty: {
            errorMessage: 'Expire year cannot be empty.',
        },
        isInt: {
            errorMessage: 'Expire year contains only integer value.',
        },
    },
});

export default updateCardValidator;
