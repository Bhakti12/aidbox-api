import { Server } from 'socket.io';
import app from './src/config/express';
// import http from 'http';

import ENV from './src/config/env';
import { iocContainer as Container } from './src/config/container';
import { TYPES } from './src/config/types';
import { ILoggerService } from './src/interfaces/ILoggerService';
import routers from '../aidbox-api/src/routes/index';
import { createHelpers } from './src/config/helpers';
import { createApp, createConfig } from '@aidbox/node-server-sdk';

// TODO:this is temporary ,after aws implementation please remove this
const allowlist: any[string] = ENV.ALLOW_CORS_DOMAIN;
app.get(`${ENV.API_ROOT}/static/:name`, (req, res) => {
    let domains = JSON.parse(allowlist);
    res.header('Content-Security-Policy', `frame-ancestors 'self' ${domains.join(' ')}`);
    // console.log(res.header('Content-Security-Policy'));
    res.sendFile(`./public/${req.params.name}`, { root: __dirname });
});

// const loggerService = Container.get<ILoggerService>(TYPES.LoggerService);

// create websocket connection
// const server = http.createServer(app);

// const config = createConfig();

// const app = createApp(config);

// Start Express server
app.listen(3000, function () {
    console.log('server running at ', 3000);
});

app.use('/aidbox',routers.questionnareRouter);

// Start websocket server
// const io = new Server(server, {
//     cors: {
//         origin: '*',
//     },
//     path: '/socket',
//     transports: ['websocket', 'polling'],
// });

// // eslint-disable-next-line @typescript-eslint/no-var-requires
// // const io = require('socket.io')(server);

// io.on('connection', (socket) => {
//     console.log('A user is connected', socket.id);
//     // socketdata = socket;

//     socket.on('join', (id) => {
//         console.log(`Join User to WebSocket: ${socket.id} with id: ${id}`);
//         socket.join(id);
//     });

//     socket.on('keep_alive', (data) => {
//         console.log('keep_alive');
//         loggerService.getLogger().info(`keep_alive`);
//         io.emit('keep_alive', { data: 'pong' });
//     });

//     socket.on('VIDEO_CALL_PIN_TO_ALL', (data) => {
//         io.to(data.linkId).emit('VIDEO_CALL_PIN_TO_ALL', { uid: data.uid });
//     });

//     socket.on('CLIENT_UPDATE_CALL_STATUS', async (data) => {
//         console.log('ip', socket.handshake.address);

//     });

//     socket.on('disconnect', (reason) => {
//         console.log(`Websocket ${socket.id} disconnect reason ${reason}`);
//         loggerService.getLogger().error(`Websocket ${socket.id} disconnect reason ${reason}`);
//     });
// });

// export { io };