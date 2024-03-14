import { checkSchema } from 'express-validator';

const sendNotification = checkSchema({
    interests: {
        in: 'body',
        exists: {
            errorMessage: 'interest is required.',
        },
        trim: true,
        notEmpty: {
            errorMessage: 'interest cannot be empty.',
        },
    },
    notificationObject: {
        isObject: true,
    },
    'notificationObject.title': {
        in: 'body',
        exists: {
            errorMessage: 'title is required.',
        },
        trim: true,
        notEmpty: {
            errorMessage: 'title cannot be empty.',
        },
    },
    'notificationObject.body': {
        in: 'body',
        exists: {
            errorMessage: 'body is required.',
        },
        trim: true,
        notEmpty: {
            errorMessage: 'body cannot be empty.',
        },
    },
    'notificationObject.deep_link': {
        in: 'body',
        exists: {
            errorMessage: 'Deep link is required.',
        },
        trim: true,
        notEmpty: {
            errorMessage: 'Deep link cannot be empty.',
        },
    },
});

export default sendNotification;
