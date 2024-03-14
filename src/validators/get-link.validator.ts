import { checkSchema } from 'express-validator';

const getLink = checkSchema({
    id: {
        in: 'params',
        exists: {
            errorMessage: 'LinkId is required.',
        },
        notEmpty: {
            errorMessage: 'LinkId cannot to be empty.',
        },
    },
    documents: {
        in: 'query',
        exists: {
            errorMessage: 'Documents is required.',
        },
        notEmpty: {
            errorMessage: 'Documents cannot to be empty.',
        },
        isBoolean: {
            errorMessage: 'Documents contains only true or false value.',
        },
    },
    meetings: {
        in: 'query',
        exists: {
            errorMessage: 'Meetings is required.',
        },
        notEmpty: {
            errorMessage: 'Meetings cannot to be empty.',
        },
        isBoolean: {
            errorMessage: 'Meetings contains only true or false value.',
        },
    },
    acitvityLogs: {
        in: 'query',
        exists: {
            errorMessage: 'AcitvityLogs is required.',
        },
        notEmpty: {
            errorMessage: 'AcitvityLogs cannot to be empty.',
        },
        isBoolean: {
            errorMessage: 'AcitvityLogs contains only true or false value.',
        },
    },
    notes: {
        in: 'query',
        exists: {
            errorMessage: 'Notes is required.',
        },
        notEmpty: {
            errorMessage: 'Notes cannot to be empty.',
        },
        isBoolean: {
            errorMessage: 'Notes contains only true or false value.',
        },
    },
});

export default getLink;
