import express from "express";
import { iocContainer as Container } from "../config/container";
import { TYPES } from "../config/types";
import { IPathwayService } from "../interfaces/IPathwayService";
import PathwayController from "../controllers/PathwayController";

const router = express.Router();

const pathwayService = Container.get<IPathwayService>(
  TYPES.PathwayService
);
const pathwayController = new PathwayController(pathwayService);

router.post("/addPathway", (req: express.Request, res: express.Response) =>
  pathwayController.addPathwayData(req, res)
);

router.get("/getpathway", (req: express.Request, res: express.Response) =>
  pathwayController.getPathway(req, res)
);

export default router;