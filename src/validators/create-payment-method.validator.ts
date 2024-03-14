import { checkSchema } from 'express-validator';

const createPaymentMethod = checkSchema({
    cardNumber: {
        in: 'body',
        trim: true,
        exists: {
            errorMessage: 'Card Number is required.',
        },
        notEmpty: {
            errorMessage: 'Card Number cannot be empty.',
        },
        stripLow: true,
    },
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
    cvc: {
        in: 'body',
        trim: true,
        exists: {
            errorMessage: 'Cvc is required.',
        },
        notEmpty: {
            errorMessage: 'Cvc cannot be empty.',
        },
        stripLow: true,
    },
});

export default createPaymentMethod;
