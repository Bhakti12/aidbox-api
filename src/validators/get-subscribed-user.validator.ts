import { checkSchema } from 'express-validator';

const getSubscribedUser = checkSchema({
    id: {
        in: 'params',
        exists: {
            errorMessage: 'SubscriptionId is required.',
        },
        notEmpty: {
            errorMessage: 'SubscriptionId cannot be empty.',
        },
        isInt: {
            errorMessage: 'SubscriptionId contains only integer Value.',
        },
    },
});

export default getSubscribedUser;
