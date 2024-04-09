import express from "express";
import { iocContainer as Container } from "../config/container";
import { TYPES } from "../config/types";
import { ICarePlanService } from "../interfaces/ICarePlanService";
import CareplanController from "../controllers/CarePlanController";

const router = express.Router();

const careplanService = Container.get<ICarePlanService>(
  TYPES.CarePlanService
);
const careplanController = new CareplanController(careplanService);

router.get("/getcareplans", (req: express.Request, res: express.Response) =>
  careplanController.getCareplan(req, res)
);

router.post("/addCareplan", (req: express.Request, res: express.Response) =>
  careplanController.addCareplanData(req, res)
);

export default router;