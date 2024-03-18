import express from "express";
import { iocContainer as Container } from "../config/container";
import { IQuestionnaireResponseService } from "../interfaces/IQuestionnaireResponseService";
import { TYPES } from "../config/types";
import QuestionnaireResponseController from "../controllers/QuestionnaireResponseController";

const router = express.Router();

const questionnaireService = Container.get<IQuestionnaireResponseService>(
  TYPES.QuestionnaireResponseService
);
const questionnaireController = new QuestionnaireResponseController(
  questionnaireService
);

router.get("/getForms", (req: express.Request, res: express.Response) =>
  questionnaireController.getFormData(req, res)
);
router.post(
  "/storeQuestionnaireResponse",
  (req: express.Request, res: express.Response) =>
    questionnaireController.storeQuestionnaireResponse(req, res)
);
router.post("/generateLink", (req: express.Request, res: express.Response) =>
  questionnaireController.generateLink(req, res)
);
router.get("/share", (req: express.Request, res: express.Response) =>
  questionnaireController.shareForm(req, res)
);
router.post("/new", (req: express.Request, res: express.Response) =>
  questionnaireController.makeCustomResource(req, res)
);
router.post("/addCareplan", (req: express.Request, res: express.Response) =>
  questionnaireController.addCareplanData(req, res)
);
router.post("/addPathway", (req: express.Request, res: express.Response) =>
  questionnaireController.addPathwayData(req, res)
);
router.post("/addFormTypes", (req: express.Request, res: express.Response) =>
  questionnaireController.addFormTypesData(req, res)
);
router.post(
  "/addQuestionnaireData",
  (req: express.Request, res: express.Response) =>
    questionnaireController.addQuestionnaireData(req, res)
);
router.get("/getcareplans", (req: express.Request, res: express.Response) =>
  questionnaireController.getCareplan(req, res)
);
router.get("/getpathway", (req: express.Request, res: express.Response) =>
  questionnaireController.getPathway(req, res)
);
router.get("/getformtypes", (req: express.Request, res: express.Response) =>
  questionnaireController.getFormtype(req, res)
);
router.get(
  "/getquestionnaireResponse",
  (req: express.Request, res: express.Response) =>
    questionnaireController.getQuestionnaireResponse(req, res)
);

export default router;
