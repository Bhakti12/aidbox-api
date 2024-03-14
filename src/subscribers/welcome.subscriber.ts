/* eslint-disable max-len */
/* eslint-disable import/no-cycle */
import ENV from '../config/env';
import { sendEmailTemplate, sendEmailTemplateWithPassword } from '../utils/ses-email';

import { iocContainer as Container } from '../config/container';
import { TYPES } from '../config/types';
import { ILoggerService } from '../interfaces/ILoggerService';
import { IDatabaseService } from '../interfaces/IDatabaseService';

// Handle send welcome event
export async function sendWelcomeMail(args) {
    const loggerService = Container.get<ILoggerService>(TYPES.LoggerService);
    const databaseService = Container.get<IDatabaseService>(TYPES.DatabaseService);

    loggerService.getLogger().info('Sending welcome email');

    // Get the database client
    const client = databaseService.Client();
    const body = `<h3>Hello ${args.firstName},<br>Welcome to FileChannels!</h3><br><h3><a href="https://www.filechannels.net/login">Click</a> here to get started.</h3><br><h3>Thanks,<br>FileChannels Team</h3>`;
    const subject = 'Welcome to FileChannels';

    try {
        console.log("password in subscriber", args.password)
        const email = args.sendPasswordInEmail
            ? await sendEmailTemplateWithPassword(
                  ENV.SES_SENDER_ADDRESS!,
                  args.emailId,
                  args.password,
                  ENV.SES_NO_REPLY_ADDRESS,
              )
            : await sendEmailTemplate(ENV.SES_SENDER_ADDRESS!, args.emailId, subject, body, ENV.SES_NO_REPLY_ADDRESS);
        console.log(email, 'Email');

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

        loggerService.getLogger().info(`Welcome email successfully sent. ${email}`);
    } catch (error) {
        console.log(error.message, 'error msg', error, 'Email error');
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

        loggerService.getLogger().error(`Sending welcome email failed. ${error}`);
    }
}
