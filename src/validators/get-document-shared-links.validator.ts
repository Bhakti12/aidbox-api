import { checkSchema } from 'express-validator';

const getDocumentSharedLinks = checkSchema({
    id: {
        in: 'params',
        exists: {
            errorMessage: 'Document id is required.',
        },
        notEmpty: {
            errorMessage: 'Document id cannot be empty.',
        },
        isInt: {
            errorMessage: 'Document id contains only integer value.',
        },
    },
    searchText: {
        in: 'query',
        optional: {
            options: {
                nullable: true,
            },
        },
    },
});

export default getDocumentSharedLinks;
