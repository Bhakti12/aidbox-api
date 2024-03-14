// import { checkSchema } from 'express-validator';
import { checkSchema } from 'express-validator';

const getUserSubscription = checkSchema({
    id: {
        in: 'params',
        exists: {
            errorMessage: 'Id is required.',
        },
        notEmpty: {
            errorMessage: 'Id cannot be empty.',
        },
        isInt: {
            errorMessage: 'Id contains only integer Value.',
        },
    },
});

export default getUserSubscription;
