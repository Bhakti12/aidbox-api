import AWS from 'aws-sdk';

AWS.config.update({
    region: 'us-east-2',
});

export function sendEmailTemplate(
    fromAddress: string,
    toAddress: string,
    subject: string,
    htmlBody: string,
    replyTo: string,
) {
    const params = {
        Destination: {
            ToAddresses: [toAddress],
        },
        Template: 'welcome-email-template',
        TemplateData: '{}',
        // Message: {
        //     Body: {
        //         Html: {
        //             Charset: 'UTF-8',
        //             Data: htmlBody,
        //         },
        //     },
        //     Subject: {
        //         Charset: 'UTF-8',
        //         Data: subject,
        //     },
        // },

        Source: fromAddress,
        ReplyToAddresses: [replyTo],
    };

    return new AWS.SES({ region: 'us-east-2' }).sendTemplatedEmail(params).promise();
}

export function sendEmailTemplateWithPassword(
    fromAddress: string,
    toAddress: string,
    password: string,
    replyTo: string,
) {
    console.log("password in ses", password)
    const params = {
        Destination: {
            ToAddresses: [toAddress],
        },
        Template: 'welcome-email-template-password-new',
        TemplateData: JSON.stringify({ password }),
        // Message: {
        //     Body: {
        //         Html: {
        //             Charset: 'UTF-8',
        //             Data: htmlBody,
        //         },
        //     },
        //     Subject: {
        //         Charset: 'UTF-8',
        //         Data: subject,
        //     },
        // },

        Source: fromAddress,
        ReplyToAddresses: [replyTo],
    };

    return new AWS.SES({ region: 'us-east-2' }).sendTemplatedEmail(params).promise();
}

export function sendEmail(fromAddress: string, toAddress: string, subject: string, htmlBody: string, replyTo: string) {
    const params = {
        Destination: {
            ToAddresses: [toAddress],
        },
        Message: {
            Body: {
                Html: {
                    Charset: 'UTF-8',
                    Data: htmlBody,
                },
            },
            Subject: {
                Charset: 'UTF-8',
                Data: subject,
            },
        },

        Source: fromAddress,
        ReplyToAddresses: [replyTo],
    };

    return new AWS.SES({ region: 'us-east-2' }).sendEmail(params).promise();
}

export function sendSendChannelTemplate(
    fromAddress: string,
    toAddress: string[],
    message: string,
    messageHeader: string,
    accountName: string,
    accountCompanyName: string,
    viewChannelUrl: string,
    receiverName: string,
    replyTo: string,
) {
    const params = {
        Destination: {
            ToAddresses: toAddress,
        },
        Template: 'send-channel',
        TemplateData: JSON.stringify({
            subject: messageHeader === '' ? 'File Channels' : messageHeader,
            message,
            messageHeader,
            accountName,
            companyName: accountCompanyName,
            viewChannelUrl,
            receiverName,
        }),
        // Message: {
        //     Body: {
        //         Html: {
        //             Charset: 'UTF-8',
        //             Data: htmlBody,
        //         },
        //     },
        //     Subject: {
        //         Charset: 'UTF-8',
        //         Data: subject,
        //     },
        // },

        Source: `File Channels to <${fromAddress}>`,
        ReplyToAddresses: [`File Channels to <${replyTo}>`],
    };

    return new AWS.SES({ region: 'us-east-2' }).sendTemplatedEmail(params).promise();
}

export function sendUpdateChannelTemplate(
    fromAddress: string,
    toAddress: string[],
    accountName: string,
    accountCompanyName: string,
    viewChannelUrl: string,
    replyTo: string,
) {
    const params = {
        Destination: {
            ToAddresses: toAddress,
        },
        Template: 'update-channel',
        TemplateData: JSON.stringify({ accountName, accountCompanyName, viewChannelUrl }),
        // Message: {
        //     Body: {
        //         Html: {
        //             Charset: 'UTF-8',
        //             Data: htmlBody,
        //         },
        //     },
        //     Subject: {
        //         Charset: 'UTF-8',
        //         Data: subject,
        //     },
        // },

        Source: fromAddress,
        ReplyToAddresses: [replyTo],
    };

    return new AWS.SES({ region: 'us-east-2' }).sendTemplatedEmail(params).promise();
}

export function sendEmailToCreator(
    fromAddress: string,
    toAddress: string,
    viewChannelUrl: string,
    receiverName: string,
    documentName: string,
    replyTo: string,
){
    const params = {
        Destination: {
            ToAddresses: [toAddress],
        },
        Template: 'send-channel',
        // TemplateData: JSON.stringify({
        //     subject: `Guest Document Upload ${documentName}`,
        //     documentName: documentName,
        //     viewChannelUrl,
        //     receiverName,
        // }),
        TemplateData: JSON.stringify({
            subject: 'File Channels',
            message: "message",
            messageHeader:"header",
            accountName:"bhakti",
            companyName: "accountCompanyName",
            viewChannelUrl:"asd",
            receiverName:"asd",
        }),
        // Message: {
        //     Body: {
        //         Html: {
        //             Charset: 'UTF-8',
        //             Data: htmlBody,
        //         },
        //     },
        //     Subject: {
        //         Charset: 'UTF-8',
        //         Data: subject,
        //     },
        // },

        Source: `File Channels to <${fromAddress}>`,
        ReplyToAddresses: [`File Channels to <${replyTo}>`],
    };

    return new AWS.SES({ region: 'us-east-2' }).sendTemplatedEmail(params).promise();
}