import { checkSchema } from 'express-validator';

const sendInvite = checkSchema({
    accountUserId: {
        in: 'params',
        exists: {
            errorMessage: 'User id is required.',
        },
        notEmpty: {
            errorMessage: 'User id cannot be empty.',
        },
        isInt: {
            errorMessage: 'User id cannot be empty.',
        },
    },
});

export default sendInvite;
