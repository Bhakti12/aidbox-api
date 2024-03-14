import { checkSchema } from 'express-validator';

const addGuestToLink = checkSchema({
    linkId: {
        in: 'body',
        exists: {
            errorMessage: 'LinkId is required.',
        },
        notEmpty: {
            errorMessage: 'LinkId cannot to be empty.',
        },
    },
    name: {
        trim: true,
        in: 'body',
        exists: {
            errorMessage: 'Name is required.',
        },
        notEmpty: {
            errorMessage: 'Name cannot to be empty.',
        },
        isLength: {
            options: {
                max: 100,
            },
            errorMessage: 'Name should be less than 100 characters.',
        },
    },
    accessCode: {
        in: 'body',
        trim: true,
        optional: {
            options: {
                nullable: true,
            },
        },
        isAlphanumeric: {
            errorMessage: 'Access Code cannot have special characters.',
        },
    },
});

export default addGuestToLink;
