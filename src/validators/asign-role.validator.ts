import { checkSchema } from 'express-validator';

const asignRole = checkSchema({
    id: {
        in: 'params',
        exists: {
            errorMessage: 'Id is required.',
        },
        notEmpty: {
            errorMessage: 'Id cannot be empty.',
        },
        isInt: {
            errorMessage: 'Id is only integer Value.',
        },
        trim: true,
    },
    roleId: {
        in: 'params',
        exists: {
            errorMessage: 'RoleId is required.',
        },
        notEmpty: {
            errorMessage: 'RoleId cannot be empty.',
        },
        isInt: {
            errorMessage: 'RoleId contains only integer Value.',
        },
        trim: true,
    },
});

export default asignRole;
