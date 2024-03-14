import { checkSchema } from 'express-validator';

const getLinkGuests = checkSchema({
    id: {
        in: 'params',
        exists: {
            errorMessage: 'LinkId is required.',
        },
        notEmpty: {
            errorMessage: 'LinkId cannot to be empty.',
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

export default getLinkGuests;
