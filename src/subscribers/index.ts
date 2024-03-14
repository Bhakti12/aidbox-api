/* eslint-disable import/no-cycle */
import { sendWelcomeMail } from './welcome.subscriber';
import { sendVerificationEmail, sendVerificationOtp } from './verification.subscriber';
import { sendResetPasswordEmail } from './reset-password.subscriber';
import { sendInviteEmail } from './send-invite.subscriber';
import { sendSendChannelMail } from './send-channel.subscriber';
import { sendDocumentUploadMail } from './send-Email-To-Creator.subscriber';
import { sendUpdateChannelMail } from './update-channel.subscriber';
import { videoConvert } from './video-convert.subscriber';

export default {
    sendWelcomeMail,
    sendVerificationEmail,
    sendVerificationOtp,
    sendResetPasswordEmail,
    sendInviteEmail,
    sendSendChannelMail,
    sendDocumentUploadMail,
    sendUpdateChannelMail,
    videoConvert,
};
