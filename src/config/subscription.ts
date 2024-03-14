import { TSubscription } from "./helpers";

export const questionnaireResponse: TSubscription<any> = {
    handler: "questionnaireResponse",
    handlerFn: async (event, { ctx, helpers }) => {
      const { resource: questionnaireResponse, previous } = event;
      console.log('Handling subscription "question"');
      console.log({ questionnaireResponse, previous });
      return { status: 500 };
    },
};

export const questionnaire: TSubscription<any> = {
    handler: "Questionnaire",
    handlerFn: async (event, { ctx, helpers }) => {
      const { resource: Questionnaire, previous } = event;
      console.log('Handling subscription "questionnaire"');
      console.log({ Questionnaire, previous });
      return { status: 500 };
    },
};