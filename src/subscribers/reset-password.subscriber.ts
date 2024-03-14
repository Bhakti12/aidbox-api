/* eslint-disable import/no-cycle */
/* eslint-disable max-len */
import ENV from '../config/env';
import { sendEmail } from '../utils/ses-email';

import { iocContainer as Container } from '../config/container';
import { TYPES } from '../config/types';
import { ILoggerService } from '../interfaces/ILoggerService';
import { IDatabaseService } from '../interfaces/IDatabaseService';

// Handle send password reset email event
export async function sendResetPasswordEmail(args) {
    const loggerService = Container.get<ILoggerService>(TYPES.LoggerService);
    const databaseService = Container.get<IDatabaseService>(TYPES.DatabaseService);

    loggerService.getLogger().info('Sending reset password email');

    // Get the database client
    const client = databaseService.Client();
    const body = `<h3>Hello ${args.name}</h3><br><h3>We received a request to reset the password for the FileChannels account associated with ${args.emailId}</h3><br><h3><a href="${ENV.RESET_PASSWORD_URL}?userId=${args.userId}&nonce=${args.nonce}">Click</a> here to reset your password.</h3><br><h3>Thanks,<br>FileChannels Team</h3>`;
    const subject = 'Reset your FileChannels password';
    console.log(body);

    try {
        await sendEmail(ENV.SES_SENDER_ADDRESS!, args.emailId, subject, body, ENV.SES_NO_REPLY_ADDRESS);

        await client.email.create({
            data: {
                address: args.emailId,
                content: body,
                subject,
                status: 'SUCCESS',
                sentAt: new Date(),
                createdAt: new Date(),
            },
        });

        await client.$disconnect();

        loggerService.getLogger().info('Reset password email sent successfully.');
    } catch (error) {
        await client.email.create({
            data: {
                address: args.emailId,
                content: body,
                subject,
                status: 'FAILED',
                sentAt: new Date(),
                createdAt: new Date(),
            },
        });

        await client.$disconnect();

        loggerService.getLogger().error(`Sending reset password email failed. ${error}`);
    }
}
