import { iocContainer as Container } from '../config/container';
import { TYPES } from '../config/types';
import { ILoggerService } from '../interfaces/ILoggerService';
import { IDatabaseService } from '../interfaces/IDatabaseService';
import {sendEmailToCreator} from '../utils/ses-email';
import ENV from '../config/env';

export async function sendDocumentUploadMail(args){
    console.log(args);
    const loggerService = Container.get<ILoggerService>(TYPES.LoggerService);
    const databaseService = Container.get<IDatabaseService>(TYPES.DatabaseService);

    loggerService.getLogger().info('Sending send upload document');

    // Get the database client
    const client = databaseService.Client();

    try {
        const email = await sendEmailToCreator(
            ENV.SES_SENDER_ADDRESS!, //args.fromAddress,
            args.toAddress,
            args.viewChannelUrl,
            args.receiverName,
            args.documentName,
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

        loggerService.getLogger().info(`send upload document email successfully sent. ${email}`);
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

        loggerService.getLogger().error(`Sending send document upload email failed. ${error}`);
    }
}