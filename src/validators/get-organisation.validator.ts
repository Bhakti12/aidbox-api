import { checkSchema } from 'express-validator';

const getOrganisation = checkSchema({
    id: {
        in: 'params',
        exists: {
            errorMessage: 'Organisation Id is required.',
        },
        notEmpty: {
            errorMessage: 'Organisation Id cannot be empty.',
        },
        isInt: {
            errorMessage: 'Organisation Id contains only integer value.',
        },
    },
});

export default getOrganisation;
