/* eslint-disable max-len */
import { checkSchema } from 'express-validator';

const sendChannelValidator = checkSchema({
    linkId: {
        in: 'body',
        trim: true,
        exists: {
            errorMessage: 'Link Id is required.',
        },
        notEmpty: {
            errorMessage: 'Link Id cannot be empty.',
        },
        isString: {
            errorMessage: 'Link Id only string.',
        },
    },
    toAddress: {
        in: 'body',
        trim: true,
        exists: {
            errorMessage: 'Link Id is required.',
        },
        notEmpty: {
            errorMessage: 'Link Id cannot be empty.',
        },
    },
});

export default sendChannelValidator;
