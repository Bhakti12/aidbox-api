import { checkSchema } from 'express-validator';

const ShareDocumentValidator = checkSchema({
    linkId: {
        in: 'body',
        exists: {
            errorMessage: 'LinkId is required.',
        },
        notEmpty: {
            errorMessage: 'LinkId cannot be empty.',
        },
    },
    documentId: {
        in: 'body',
        exists: {
            errorMessage: 'documentId is required.',
        },
        notEmpty: {
            errorMessage: 'documentId cannot be empty.',
        },
    },
});

export default ShareDocumentValidator;
