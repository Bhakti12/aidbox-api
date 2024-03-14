import { checkSchema } from 'express-validator';

const guestRefreshValidator = checkSchema({
    guestId: {
        in: 'body',
        optional: {
            options: {
                nullable: true,
            },
        },
        isNumeric: true,
        trim: true,
        stripLow: true,
    },
    refreshToken: {
        in: 'body',
        trim: true,
        exists: {
            errorMessage: 'Refresh token is required.',
        },
        notEmpty: {
            errorMessage: 'Refresh token cannot be empty.',
        },
        stripLow: true,
    },
});

export default guestRefreshValidator;
