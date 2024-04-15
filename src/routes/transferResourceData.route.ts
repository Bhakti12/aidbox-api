import express from "express";
import { iocContainer as Container } from "../config/container";
import { TYPES } from "../config/types";
import { ITransferResourceDataService } from "../interfaces/ITransferResourceDataService";
import transferResourceDataController from "../controllers/transferResourceDataController";

const router = express.Router();

const SubscriptionService = Container.get<ITransferResourceDataService>(
  TYPES.TransferResourceDataService
);
const subscriptionController = new transferResourceDataController(
  SubscriptionService
);

router.post("/map-data", (req: express.Request, res: express.Response) =>
  subscriptionController.mapData(req, res)
);
