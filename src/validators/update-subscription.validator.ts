import { checkSchema } from 'express-validator';

const updateSubscription = checkSchema({
    id: {
        in: 'params',
        exists: {
            errorMessage: 'SubscriptionId is required.',
        },
        notEmpty: {
            errorMessage: 'SubscriptionId cannot be empty.',
        },
        isInt: {
            errorMessage: 'SubscriptionId contains only integer Value.',
        },
    },
    name: {
        in: 'body',
        exists: {
            errorMessage: 'Name is required.',
        },
        notEmpty: {
            errorMessage: 'Name cannot be empty.',
        },
        isLength: {
            options: {
                max: 150,
            },
            errorMessage: 'Name cannot be longer than 150 characters.',
        },
        isAlpha: {
            errorMessage: 'Name cannot contain any special characters.',
        },
        trim: true,
        stripLow: true,
    },
    description: {
        in: 'body',
        exists: {
            errorMessage: 'Description is required.',
        },
        notEmpty: {
            errorMessage: 'Description cannot be empty.',
        },
        trim: true,
        stripLow: true,
    },
    numberOfUsersPerMonth: {
        in: 'body',
        exists: {
            errorMessage: 'Number Of Users is required.',
        },
        notEmpty: {
            errorMessage: 'Number Of Users cannot be empty.',
        },
        isInt: {
            errorMessage: 'Number Of Users contains only integer Value.',
        },
    },
    voiceMinutesPerMonth: {
        in: 'body',
        exists: {
            errorMessage: 'Voice Minutes is required.',
        },
        notEmpty: {
            errorMessage: 'Voice Minutes cannot be empty.',
        },
        isInt: {
            errorMessage: 'Voice Minutes contains only integer Value.',
        },
    },
    videoMinutesPerMonth: {
        in: 'body',
        exists: {
            errorMessage: 'Video Minutes is required.',
        },
        notEmpty: {
            errorMessage: 'Video Minutes cannot be empty.',
        },
        isInt: {
            errorMessage: 'Video Minutes contains only integer Value.',
        },
    },
    monthlySubscriptionPrice: {
        in: 'body',
        exists: {
            errorMessage: 'Monthly Price is required.',
        },
        notEmpty: {
            errorMessage: 'Monthly Price cannot be empty.',
        },
        isDecimal: {
            errorMessage: 'Monthly Price contains only decimal Value.',
        },
    },
    yearlySubscriptionPrice: {
        in: 'body',
        exists: {
            errorMessage: 'Yearly Price is required.',
        },
        notEmpty: {
            errorMessage: 'Yearly Price cannot be empty.',
        },
        isDecimal: {
            errorMessage: 'Yearly Price contains only Decimal Value.',
        },
    },
});

export default updateSubscription;
