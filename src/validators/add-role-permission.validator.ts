import { checkSchema } from 'express-validator';

const addRolePermission = checkSchema({
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
    permissionId: {
        in: 'params',
        exists: {
            errorMessage: 'PermissionId is required.',
        },
        notEmpty: {
            errorMessage: 'PermissionId cannot be empty.',
        },
        isInt: {
            errorMessage: 'PermissionId contains only integer Value.',
        },
        trim: true,
    },
});

export default addRolePermission;
