import { checkSchema } from 'express-validator';

const createIcs = checkSchema({
    meetingId: {
        in: 'body',
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
});

export default createIcs;
