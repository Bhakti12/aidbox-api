import { checkSchema } from 'express-validator';

const acceptDeclineMeeting = checkSchema({
    userId: {
        in: 'params',
        exists: {
            errorMessage: 'UserId is required.',
        },
        notEmpty: {
            errorMessage: 'UserId cannot be empty.',
        },
        isInt: {
            errorMessage: 'UserId contains only integer value.',
        },
    },
    meetingId: {
        in: 'params',
        exists: {
            errorMessage: 'MeetingId is required.',
        },
        notEmpty: {
            errorMessage: 'MeetingId cannot be empty.',
        },
        isInt: {
            errorMessage: 'MeetingId contains only integer value.',
        },
    },
    is_guest: {
        in: 'query',
        exists: {
            errorMessage: 'is_guest flag is required.',
        },
        notEmpty: {
            errorMessage: 'is_guest flag cannot be empty.',
        },
        isBoolean: {
            errorMessage: 'is_guest contains only true or false.',
        },
    },
    accept: {
        in: 'query',
        exists: {
            errorMessage: 'accept flag is required.',
        },
        notEmpty: {
            errorMessage: 'accept flag cannot be empty.',
        },
        isBoolean: {
            errorMessage: 'accept contains only true or false.',
        },
    },
});

export default acceptDeclineMeeting;
