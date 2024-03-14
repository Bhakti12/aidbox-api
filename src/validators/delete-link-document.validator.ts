import { checkSchema } from 'express-validator';

const deleteLinkDocument = checkSchema({
    id: {
        in: 'params',
        exists: {
            errorMessage: 'DocumentId is required.',
        },
        notEmpty: {
            errorMessage: 'DocumentId cannot to be empty.',
        },
    },
});

export default deleteLinkDocument;
