import express from "express";
import { iocContainer as Container } from "../config/container";
import { TYPES } from "../config/types";
import { ICareplan_pathwayService } from "../interfaces/ICareplan_patwayService";
import Careplan_pathwayController from "../controllers/Careplan_pathwayController";
const router = express.Router();

const careplan_pathwayService = Container.get<ICareplan_pathwayService>(
  TYPES.Careplan_pathwayService
);
const careplan_pathwayController = new Careplan_pathwayController(careplan_pathwayService);

router.post(
    "/add-careplan-pathway",
    (req: express.Request, res: express.Response) =>
      careplan_pathwayController.careplan_pathway(req, res)
);

export default router;