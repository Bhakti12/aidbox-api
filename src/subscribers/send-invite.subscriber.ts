/* eslint-disable import/no-cycle */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-explicit-any */
import ENV from '../config/env';
import { sendEmail } from '../utils/ses-email';

import { iocContainer as Container } from '../config/container';
import { TYPES } from '../config/types';
import { ILoggerService } from '../interfaces/ILoggerService';
import { IDatabaseService } from '../interfaces/IDatabaseService';
import { sendSms } from '../utils/sns-sms';

export async function sendInviteEmail(args) {
    const loggerService = Container.get<ILoggerService>(TYPES.LoggerService);
    const databaseService = Container.get<IDatabaseService>(TYPES.DatabaseService);

    loggerService.getLogger().info('Sending invitation to user.');

    // Get the database client
    const client = databaseService.Client();
    const body = `<h3>Hello ${args.name}</h3><br><h3>We received a request to change the password for the FileChannels account associated with ${args.emailId}</h3><br><h3><a href="${ENV.CHANGE_PASSWORD_URL}?userId=${args.userId}&nonce=${args.nonce}">Click</a> here to change your password.</h3><br><h3>Thanks,<br>FileChannels Team</h3>`;
    const subject = 'Change your FileChannels password';
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

        loggerService.getLogger().info('Change password email sent successfully.');
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

        loggerService.getLogger().error(`Sending change password email failed. ${error}`);
    }
}
