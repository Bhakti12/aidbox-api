import { checkSchema } from 'express-validator';

const getLibraryDocuments = checkSchema({
    id: {
        in: 'params',
        exists: {
            errorMessage: 'UserId is required.',
        },
        notEmpty: {
            errorMessage: 'UserId cannot be empty. test',
        },
    },
});

export default getLibraryDocuments;
