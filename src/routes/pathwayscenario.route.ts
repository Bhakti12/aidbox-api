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

router.get("/get-form-data", (req: express.Request, res: express.Response) =>
  pathwayScenarioController.getFormsofPatient(req, res)
);
router.put("/update-query", (req: express.Request, res: express.Response) =>
  pathwayScenarioController.storeQuery(req, res)
);
export default router;
