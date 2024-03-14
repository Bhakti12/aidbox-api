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
      let result: any;
      const operation: TOperation<any> = {
        method: "GET",
        path: ["$get-Questionnaire"],
        handlerFn: async (req, { ctx }) => {
          const { resources: questionnaire } = await ctx.api.findResources<any>(
            "Questionnaire"
          );

          result = !questionnaire.length
            ? null
            : await ctx.api.getResource<any>(
                "Questionnaire",
                questionnaire[0].id
              );

          console.log({ questionnaire });
          return { resource: { questionnaire, result } };
        },
      };
      console.log("operation from repo", operation, result);
      return {
        apiDetail: operation,
        result
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
        path: ["createQuestionnaire"],
        handlerFn: async (req, { ctx, helpers }) => {
          assert.ok(question, new ValidationError("resource required"));
          const {
            client_name,
            DateOfBirth,
            Consent_to_allow_the_taking_of_pictures,
            agree_for_pictures,
            consent_for_communication,
            consent_for_emails,
            bayshore_telephone_number,
            e_mail,
            consent_to,
          } = question;

          const questionnaire = await ctx.api.createResource<any>(
            "questionnaireresponse",
            {
              client_name: [{ answer: client_name }],
              DateOfBirth: [{ answer: DateOfBirth }],
              agree_for_pictures: [{ answer: agree_for_pictures }],
              consent_for_communication: [
                { answer: consent_for_communication },
              ],
              consent_for_emails: [{ answer: consent_for_emails }],
              consent_to: [{ answer: consent_to }],
              Consent_to_allow_the_taking_of_pictures: [
                { answer: Consent_to_allow_the_taking_of_pictures },
              ],
              e_mail: [{ answer: e_mail }],
              bayshore_telephone_number: [
                { answer: bayshore_telephone_number },
              ],
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
