import { checkSchema } from 'express-validator';

const rescheduleMeeting = checkSchema({
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
    meetAt: {
        in: 'body',
        exists: {
            errorMessage: 'MeetAt(Timestamp) is required.',
        },
        notEmpty: {
            errorMessage: 'MeetAt(Timestamp) cannot be empty.',
        },
        // isDate: {
        //     errorMessage: 'MeetAt is contains only Timestamp.',
        // },
    },
});

export default rescheduleMeeting;
