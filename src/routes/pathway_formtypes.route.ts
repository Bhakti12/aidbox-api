import express from "express";
import { iocContainer as Container } from "../config/container";
import { TYPES } from "../config/types";
import { IPathway_formtypesService } from "../interfaces/IPathway_formtypesService";
import Pathway_formtypesController from "../controllers/Pathway_formtypesController";

const router = express.Router();

const pathway_formtypesService = Container.get<IPathway_formtypesService>(
  TYPES.Pathway_formtypesService
);
const pathway_formtypesController = new Pathway_formtypesController(pathway_formtypesService);

router.post(
  "/add-formtype-pathway",
  (req: express.Request, res: express.Response) =>
    pathway_formtypesController.addPathway_formtypes(req, res)
);

export default router;