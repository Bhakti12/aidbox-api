import express from "express";
import { iocContainer as Container } from "../config/container";
import { TYPES } from "../config/types";
import { IFormtypesService } from "../interfaces/IFormtypesService";
import FormtypesController from "../controllers/FormtypesController";

const router = express.Router();

const formtypesService = Container.get<IFormtypesService>(
  TYPES.FormtypesService
);
const formtypesController = new FormtypesController(formtypesService);

router.get("/getformtypes", (req: express.Request, res: express.Response) =>
  formtypesController.getFormtype(req,res)
);

router.post("/addFormTypes", (req: express.Request, res: express.Response) =>
  formtypesController.addFormTypesData(req, res)
);

export default router;