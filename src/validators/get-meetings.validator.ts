import { checkSchema } from 'express-validator';

const getMeetings = checkSchema({
    id: {
        in: 'params',
        exists: {
            errorMessage: 'LinkId is required.',
        },
        notEmpty: {
            errorMessage: 'LinkId cannot to be empty.',
        },
    },
    userId: {
        in: 'params',
        exists: {
            errorMessage: 'userId is required.',
        },
        notEmpty: {
            errorMessage: 'userId cannot to be empty.',
        },
    },
});

export default getMeetings;