import { checkSchema } from 'express-validator';

const getRolePermission = checkSchema({
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

export default getRolePermission;
