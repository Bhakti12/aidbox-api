import { checkSchema } from 'express-validator';

const iosDeviceTokenSchema = checkSchema({
    token: {
        in: 'body',
        trim: true,
        optional: {
            options: {
                nullable: true,
            },
        },
        exists: {
            errorMessage: 'token is required.',
        },
    },
});

export default iosDeviceTokenSchema;
