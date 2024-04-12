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
router.put(
  "/updateQuestionnaireData",
  (req: express.Request, res: express.Response) =>
    questionnaireController.updateQuestionnaireData(req, res)
);
router.get(
  "/getquestionnaireResponse",
  (req: express.Request, res: express.Response) =>
    questionnaireController.getQuestionnaireResponse(req, res)
);
router.get(
  "/getPathwayOfCareplan",
  (req: express.Request, res: express.Response) =>
    questionnaireController.getPathwayOfCareplan(req, res)
);

export default router;
