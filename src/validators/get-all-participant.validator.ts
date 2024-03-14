import { checkSchema } from 'express-validator';

const getAllParticipant = checkSchema({
    id: {
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
});

export default getAllParticipant;
