/* eslint-disable import/no-cycle */
import express from 'express';

import { uploadProfilePicture } from '../config/multer';
import TestController from '../controllers/TestController';

const router = express.Router();
const testController = new TestController();

router.get('/', uploadProfilePicture.single('profilePicture'), (req, res) => testController.testMethod(req, res));

export default router;
