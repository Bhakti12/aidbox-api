import { checkSchema } from 'express-validator';

const addNoteToLink = checkSchema({
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
    content: {
        in: 'body',
        exists: {
            errorMessage: 'Content is required.',
        },
        notEmpty: {
            errorMessage: 'Content cannot to be empty.',
        },
    },
});

export default addNoteToLink;
