import { TSubscription } from "./helpers";

export const QuestionnaireResponse: TSubscription<any> = {
    handler: "QuestionnaireResponse",
    handlerFn: async (event, { ctx, helpers }) => {
      const { resource: QuestionnaireResponse, previous } = event;
      console.log('Handling subscription "question"');
      console.log({ QuestionnaireResponse, previous });
      return { status: 500 };
    },
};

// export const questionnaire: TSubscription<any> = {
//     handler: "Questionnaire",
//     handlerFn: async (event, { ctx, helpers }) => {
//       const { resource: Questionnaire, previous } = event;
//       console.log('Handling subscription "questionnaire"');
//       console.log({ Questionnaire, previous });
//       return { status: 500 };
//     },
// };