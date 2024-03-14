import AWS from 'aws-sdk';

AWS.config.update({
    region: 'us-east-2',
});

export async function sendSms(countryCode: string, mobileNumber: string, message: string, reliable: boolean) {
    const smsAttributes = {
        attributes: {
            DefaultSMSType: reliable ? 'Transactional' : 'Promotional',
        },
    };

    await new AWS.SNS({ apiVersion: '2010-03-31' }).setSMSAttributes(smsAttributes);

    const params = {
        Message: message,
        PhoneNumber: `${countryCode}${mobileNumber}`,
    };

    return new AWS.SNS({ apiVersion: '2010-03-31' }).publish(params).promise();
}
