import express from "express";
import { iocContainer as Container } from '../config/container';
import { IQuestionnaireResponseService } from "../interfaces/IQuestionnaireResponseService";
import { TYPES } from "../config/types";
import QuestionnaireResponseController from "../controllers/QuestionnaireResponseController";

const router = express.Router();

const questionnaireService = Container.get<IQuestionnaireResponseService>(TYPES.QuestionnaireResponseService);
const questionnaireController = new QuestionnaireResponseController(questionnaireService);

router.get("/getForms",(req: express.Request, res: express.Response) => questionnaireController.getFormData(req,res));
router.post("/storeQuestionnaireResponse",(req: express.Request, res: express.Response) => questionnaireController.storeQuestionnaireResponse(req,res));

export default router;