import { checkSchema } from 'express-validator';

const getLinkDocuments = checkSchema({
    id: {
        in: 'params',
        exists: {
            errorMessage: 'LinkId is required.',
        },
        notEmpty: {
            errorMessage: 'LinkId cannot to be empty.',
        },
    },
});

export default getLinkDocuments;
