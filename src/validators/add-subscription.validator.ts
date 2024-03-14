import { checkSchema } from 'express-validator';

const addSubscription = checkSchema({
    name: {
        in: 'body',
        trim: true,
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
        stripLow: true,
    },
    description: {
        in: 'body',
        trim: true,
        exists: {
            errorMessage: 'Description is required.',
        },
        notEmpty: {
            errorMessage: 'Description cannot be empty.',
        },
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
    numberOfLinksPerMonth: {
        in: 'body',
        exists: {
            errorMessage: 'Number Of Links is required.',
        },
        notEmpty: {
            errorMessage: 'Number Of Links cannot be empty.',
        },
        isInt: {
            errorMessage: 'Number Of Links contains only integer Value.',
        },
    },
    storageLimitInBytesPerMonth: {
        in: 'body',
        exists: {
            errorMessage: 'storageLimitInBytes is required.',
        },
        notEmpty: {
            errorMessage: 'storageLimitInBytes cannot be empty.',
        },
        isInt: {
            errorMessage: 'storageLimitInBytes contains only integer Value.',
        },
    },
    totalStorageLimitInBytes: {
        in: 'body',
        exists: {
            errorMessage: 'storageLimitInBytes is required.',
        },
        notEmpty: {
            errorMessage: 'storageLimitInBytes cannot be empty.',
        },
        isInt: {
            errorMessage: 'storageLimitInBytes contains only integer Value.',
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
    isMultipleUserLicense: {
        in: 'body',
        exists: {
            errorMessage: 'isMultipleUserLicense is required.',
        },
        notEmpty: {
            errorMessage: 'isMultipleUserLicense cannot be empty.',
        },
        isBoolean: {
            errorMessage: 'isMultipleUserLicense contains only true or false.',
        },
    },
    vat: {
        in: 'body',
        exists: {
            errorMessage: 'vat is required.',
        },
        notEmpty: {
            errorMessage: 'vat cannot be empty.',
        },
        isInt: {
            errorMessage: 'vat only integer Value.',
        },
    },
    stripeMonthlyPriceId: {
        in: 'body',
        trim: true,
        exists: {
            errorMessage: 'stripeMonthlyPriceId is required.',
        },
        notEmpty: {
            errorMessage: 'stripeMonthlyPriceId cannot be empty.',
        },
    },
    stripeYearlyPriceId: {
        in: 'body',
        trim: true,
        exists: {
            errorMessage: 'stripeMonthlyPriceId is required.',
        },
        notEmpty: {
            errorMessage: 'stripeMonthlyPriceId cannot be empty.',
        },
    },
});

export default addSubscription;
