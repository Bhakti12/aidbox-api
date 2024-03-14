import { iocContainer as Container } from '../config/container';
import { TYPES } from '../config/types';
import { ILoggerService } from '../interfaces/ILoggerService';
import { IDatabaseService } from '../interfaces/IDatabaseService';
import { sendUpdateChannelTemplate } from '../utils/ses-email';
import ENV from '../config/env';

export async function sendUpdateChannelMail(args) {
    const loggerService = Container.get<ILoggerService>(TYPES.LoggerService);
    const databaseService = Container.get<IDatabaseService>(TYPES.DatabaseService);

    loggerService.getLogger().info('Sending update channel email');

    // Get the database client
    const client = databaseService.Client();

    console.log('args', args);

    try {
        const email = await sendUpdateChannelTemplate(
            ENV.SES_SENDER_ADDRESS!, //args.fromAddress,
            args.toAddress,
            args.accountName,
            args.accountCompanyName,
            args.viewChannelUrl,
            ENV.SES_NO_REPLY_ADDRESS,
        );
        console.log(email, 'Email');

        await client.email.create({
            data: {
                address: args.toAddress.toString(),
                content: 'update-channel-template',
                subject: 'Update Channel',
                status: 'SUCCESS',
                sentAt: new Date(),
                createdAt: new Date(),
            },
        });

        await client.$disconnect();

        loggerService.getLogger().info(`update channel email successfully sent. ${email}`);
    } catch (error) {
        console.log(error.message, 'error msg', error, 'Email error');
        await client.email.create({
            data: {
                address: args.toAddress.toString(),
                content: 'update-channel-template',
                subject: 'Update Channel',
                status: 'FAILED',
                sentAt: new Date(),
                createdAt: new Date(),
            },
        });

        await client.$disconnect();

        loggerService.getLogger().error(`Sending update channel email failed. ${error}`);
    }
}
