import { checkSchema } from 'express-validator';

const getLinkNotes = checkSchema({
    linkId: {
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
            errorMessage: 'UserId is required.',
        },
        notEmpty: {
            errorMessage: 'UserId cannot to be empty.',
        },
        isInt: {
            errorMessage: 'UserId contains only integer value.',
        },
    },
});

export default getLinkNotes;
