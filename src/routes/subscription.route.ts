import express from "express";
import { iocContainer as Container } from "../config/container";
import { ISubscriptionService } from "../interfaces/ISubscriptionService";
import { TYPES } from "../config/types";
import SubscriptionController from "../controllers/subscriptionController";

const router = express.Router();

const SubscriptionService = Container.get<ISubscriptionService>(
  TYPES.SubscriptionService
);
const subscriptionController = new SubscriptionController(SubscriptionService);

router.post('/createSubscription',(req: express.Request, res: express.Response) => subscriptionController.createSubscription(req,res));
router.get('/subscriptionstatus',(req: express.Request, res: express.Response) => subscriptionController.getSubscriptionStatus(req,res));
router.get('/subscriptionevent',(req: express.Request, res: express.Response) => subscriptionController.getSubscriptionEvent(req,res));
router.delete('/deletesubscription',(req: express.Request, res: express.Response) => subscriptionController.deleteSubscription(req,res));

export default router;