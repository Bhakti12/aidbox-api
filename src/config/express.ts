/* eslint-disable import/no-cycle */
import 'reflect-metadata';
import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
// import cors from './cors';

import ENV from './env';
// import { morganLogger } from './logger';
import { errorHandler } from '../middlewares/errorHandler';

// import { EventTypes } from './events';
import subscribers from '../subscribers/index';

// import routes
import routers from '../routes/index';
// import env from './env';

const app = express();
// Use helmet JS
app.use(helmet());

app.use(cors({ origin: '*' }));
app.options('*', cors({ origin: '*' }));
// app.options('*', cors);
// Use body parser to read JSON payloads

app.use(express.json({ limit: '500mb' }));

app.use(
    bodyParser.urlencoded({
        extended: true,
        limit: '500mb',
    }),
);
// app.use(`${ENV.API_ROOT}/payments/webhook`, bodyParser.raw({ type: 'application/json' }));
app.use(bodyParser.json());

// Use morgan logger
// app.use(morganLogger);

// Add path to swagger docs
// app.use(`${ENV.API_ROOT}/docs`, routers.swaggerRouter);

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Register routes
// app.use(`${ENV.API_ROOT}/test`, routers.testRouter);
app.use(`${ENV.API_ROOT}/questionnaireResponse`, routers.questionnareRouter);
// app.use(`${ENV.API_ROOT}/auth`, routers.authRoueRouter);

// Use error handling middleware
app.use(errorHandler);

// Set event subscribers
// app.on(EventTypes.SEND_WELCOME_EMAIL, subscribers.sendWelcomeMail);
// app.on(EventTypes.SEND_VERIFICATION_EMAIL, subscribers.sendVerificationEmail);
// app.on(EventTypes.SEND_VERIFICATION_SMS, subscribers.sendVerificationOtp);
// app.on(EventTypes.SEND_RESET_PASSWORD_EMAIL, subscribers.sendResetPasswordEmail);
// app.on(EventTypes.SEND_INVITE_EMAIL, subscribers.sendInviteEmail);
// app.on(EventTypes.SEND_SEND_CHANNEL_EMAIL, subscribers.sendSendChannelMail);
// app.on(EventTypes.SEND_UPLOAD_DOCUMENT_EMAIL, subscribers.sendDocumentUploadMail);
// app.on(EventTypes.SEND_UPDATE_CHANNEL_EMAIL, subscribers.sendUpdateChannelMail);
// app.on(EventTypes.VIDEO_CONVERT, subscribers.videoConvert);

// Export the configured app
export default app;
