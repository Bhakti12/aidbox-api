import axios from "axios";
import { InternalServerError } from "../errors/InternalServerError";
import { IQuestionnaireResponseRepository } from "../interfaces/IQuestionnaireResponseRepository";
import { storeFormData } from "../types/Question";
import { injectable } from "inversify";
import * as assert from "assert";
import {
  ManifestOperations,
  NotFoundError,
  ValidationError,
} from "@aidbox/node-server-sdk";
import { TOperation } from "../config/helpers";

@injectable()
export class QuestionnaireResponseRepository
  implements IQuestionnaireResponseRepository
{
  getQuestionnair(): ManifestOperations {
    try {
      const operation: TOperation<any> = {
        method: "GET",
        path: ["$get-Questionnaire"],
        handlerFn: async (req, { ctx }) => {
          const { resources: questionnaire } = await ctx.api.findResources<any>(
            "Questionnaire"
          );

          const questionn = !questionnaire.length
            ? null
            : await ctx.api.getResource<any>(
                "Questionnaire",
                questionnaire[0].id
              );

          console.log({ questionnaire, questionn });
          return { resource: { questionnaire, questionn } };
        },
      };
      console.log("operation ", operation);
      return {
        getquestionnaire: operation,
      };
    } catch (err) {
      console.log("err", err);
      throw new InternalServerError(
        "An error occurred while interacting with the database"
      );
    }
  }

  storeQuestionnaireResponse(question: any): ManifestOperations {
    try {
      const operation: TOperation<any> = {
        method: "POST",
        path: ["$create-QuestionnaireResponse"],
        handlerFn: async (req, { ctx, helpers }) => {
          assert.ok(question, new ValidationError("resource required"));
          const {
            client_name
          } = question;

          console.log("question",question);

          const questionnaire = await ctx.api.createResource<any>(
            "questionnaireresponse",
            {
              client_name: [{ answer: client_name }],
            }
          );
          console.log("question", questionnaire);
          return { resource: questionnaire };
        },
      };
      console.log("operations", operation);
      return {
        createQuestionnaire: operation,
      };
    } catch (err) {
      console.log("err", err);
      throw new InternalServerError(
        "An error occurred while interacting with the database"
      );
    }
  }
}
