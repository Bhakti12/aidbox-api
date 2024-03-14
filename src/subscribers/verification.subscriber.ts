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

// Handle send verification email event
export async function sendVerificationEmail(args: any) {
    const loggerService = Container.get<ILoggerService>(TYPES.LoggerService);
    const databaseService = Container.get<IDatabaseService>(TYPES.DatabaseService);

    loggerService.getLogger().info('Sending verification email');

    // Get the database client
    const client = databaseService.Client();
    const body = `Please <a href="${ENV.APP_BASE_URL}/${ENV.API_ROOT}/accountUser/${args.userId}/email/verify?nonce=${args.nonce}">click here</a> to verify your email address`;
    const subject = 'The Link - Email Verification';

    console.log(body, 'body');

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

        loggerService.getLogger().info('Verification email successfully sent.');
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

        loggerService.getLogger().error(`Sending verification email failed. ${error}`);
    }
}

// Handle send verification sms event
export async function sendVerificationOtp(args: any) {
    const loggerService = Container.get<ILoggerService>(TYPES.LoggerService);
    const databaseService = Container.get<IDatabaseService>(TYPES.DatabaseService);

    loggerService.getLogger().info('Sending verification OTP');

    // Get the database client
    const client = databaseService.Client();
    const content = `Verification OTP: ${args.otp}`;

    try {
        // Sends SMS
        await sendSms(args.countryCode, args.mobileNumber, content, true);

        await client.sMS.create({
            data: {
                countryCode: args.countryCode,
                mobileNumber: args.mobileNumber,
                content,
                sentAt: new Date(),
            },
        });

        await client.$disconnect();

        loggerService.getLogger().info('Verification OTP successfully sent.');
    } catch (error) {
        await client.sMS.create({
            data: {
                countryCode: args.countryCode,
                mobileNumber: args.mobileNumber,
                content,
                error,
                sentAt: new Date(),
            },
        });

        await client.$disconnect();

        loggerService.getLogger().error('Sending verification OTP failed.');
    }
}
