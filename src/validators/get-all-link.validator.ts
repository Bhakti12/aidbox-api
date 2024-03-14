import { checkSchema } from 'express-validator';

const getAllLink = checkSchema({
    userId: {
        in: 'query',
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
    searchText: {
        in: 'query',
        optional: {
            options: {
                nullable: true,
            },
        },
    },
});

export default getAllLink;
