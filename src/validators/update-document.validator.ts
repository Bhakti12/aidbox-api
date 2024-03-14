import { checkSchema } from 'express-validator';

const documentLink = checkSchema({
    id: {
        in: 'params',
        exists: {
            errorMessage: 'DocumentId is required.',
        },
        notEmpty: {
            errorMessage: 'DocumentId cannot to be empty.',
        },
    },
    name: {
        in: 'body',
        exists: {
            errorMessage: 'Name is required.',
        },
        notEmpty: {
            errorMessage: 'Name cannot to be empty.',
        },
    },
});

export default documentLink;
