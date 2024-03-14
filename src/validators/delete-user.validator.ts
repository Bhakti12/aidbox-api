import { checkSchema } from 'express-validator';

const deleteUser = checkSchema({
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
        trim: true,
    },
});

export default deleteUser;
