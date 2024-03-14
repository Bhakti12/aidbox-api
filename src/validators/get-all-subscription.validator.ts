import { checkSchema } from 'express-validator';

const getAllSubscription = checkSchema({
    type: {
        in: 'query',
        exists: {
            errorMessage: 'Type is required.',
        },
        notEmpty: {
            errorMessage: 'Type cannot be empty.',
        },
        trim: true,
        stripLow: true,
    },
});

export default getAllSubscription;
