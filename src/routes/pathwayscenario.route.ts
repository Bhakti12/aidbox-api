import express from "express";
import { iocContainer as Container } from "../config/container";
import { TYPES } from "../config/types";
import { IPathwayscenarioService } from "../interfaces/IPathwayscenarioService";
import PathwayScenarioController from "../controllers/pathwayScenarioController";

const router = express.Router();

const pathwayService = Container.get<IPathwayscenarioService>(
  TYPES.PathwayscenarioService
);
const pathwayScenarioController = new PathwayScenarioController(pathwayService);

router.post(
  "/add-formtype-pathway",
  (req: express.Request, res: express.Response) =>
    pathwayScenarioController.addPathway_formtypes(req,res)
);
router.post(
  "/add-careplan-pathway",
  (req: express.Request, res: express.Response) =>
    pathwayScenarioController.careplan_pathway(req,res)
);

export default router;