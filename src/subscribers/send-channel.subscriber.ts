import { iocContainer as Container } from '../config/container';
import { TYPES } from '../config/types';
import { ILoggerService } from '../interfaces/ILoggerService';
import { IDatabaseService } from '../interfaces/IDatabaseService';
import { sendSendChannelTemplate } from '../utils/ses-email';
import ENV from '../config/env';

export async function sendSendChannelMail(args) {
    const loggerService = Container.get<ILoggerService>(TYPES.LoggerService);
    const databaseService = Container.get<IDatabaseService>(TYPES.DatabaseService);

    loggerService.getLogger().info('Sending send channel email');

    // Get the database client
    const client = databaseService.Client();

    console.log('args', args);

    try {
        const email = await sendSendChannelTemplate(
            ENV.SES_SENDER_ADDRESS!, //args.fromAddress,
            args.toAddress,
            args.message,
            args.messageHeader,
            args.accountName,
            args.accountCompanyName,
            args.viewChannelUrl,
            args.receiverName,
            ENV.SES_NO_REPLY_ADDRESS,
        );
        console.log(email, 'Email');

        await client.email.create({
            data: {
                address: args.toAddress.toString(),
                content: 'send-channel-template',
                subject: 'Channel',
                status: 'SUCCESS',
                sentAt: new Date(),
                createdAt: new Date(),
            },
        });

        await client.$disconnect();

        loggerService.getLogger().info(`send channel email successfully sent. ${email}`);
    } catch (error) {
        console.log(error.message, 'error msg', error, 'Email error');
        await client.email.create({
            data: {
                address: args.toAddress.toString(),
                content: 'send-channel-template',
                subject: 'Channel',
                status: 'FAILED',
                sentAt: new Date(),
                createdAt: new Date(),
            },
        });

        await client.$disconnect();

        loggerService.getLogger().error(`Sending send channel email failed. ${error}`);
    }
}
