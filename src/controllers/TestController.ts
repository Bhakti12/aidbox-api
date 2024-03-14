/* eslint-disable import/no-cycle */
import * as express from 'express';
import BaseController from './BaseController';

import app from '../config/express';
import { EventTypes } from '../config/events';

export default class TestController extends BaseController {
    async testMethod(req: express.Request, res: express.Response) {
        try {
            res.send('<h1>Hello</h1>');
            // this.sendJSONResponse(
            //     res,
            //     null,
            //     {
            //         length: 1,
            //     },
            //     {
            //         name: 'Test',
            //     },
            // );
        } catch (error) {
            this.sendErrorResponse(req, res, error);
        }
    }
}
