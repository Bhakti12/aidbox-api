import { checkSchema } from 'express-validator';

const getUser = checkSchema({
    id: {
        in: 'params',
        exists: {
            errorMessage: 'Id is required.',
        },
        notEmpty: {
            errorMessage: 'Id cannot be empty.',
        },
        isInt: {
            errorMessage: 'Id contains only integer value.',
        },
    },
});

export default getUser;
