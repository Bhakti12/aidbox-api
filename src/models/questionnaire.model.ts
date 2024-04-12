import mongoose from "mongoose";

var questionnaireSchema = new mongoose.Schema({
  url: {
    type: String,
  },
  title: {
    type: String,
  },
  status: {
    type: String,
  },
  item: [
    {
      linkId: { type: String },
      text: { type: String },
      type: { type: String },
      extension: [
        {
          url: { type: String },
          value: {
            integer: { type: Number },
            instant: { type: String },
          },
        },
      ],
      enableWhen: {
        question: { type: String },
        operation: { type: String },
        answer: {
          boolean: { type: Boolean },
          decimal: { type: Number },
          integer: { type: Number },
          date: { type: Number },
          datetime: { type: String },
          time: { type: String },
          string: { type: String },
          quantity: { type: String },
          reference: { type: String },
          coding: {
            system: { type: String },
            code: { type: Number },
            display: { type: String },
          },
        },
      },
      required: { type: Boolean },
      disabled: {
        display: { type: String },
      },
      enableBehavior: { type: String },
      initial: {
        value: {
          boolean: { type: Boolean },
          decimal: { type: Number },
          integer: { type: Number },
          date: { type: String },
          datetime: { type: String },
          string: { type: String },
          uri: { type: String },
          attachment: { type: String },
          coding: {
            system: { type: String },
            code: { type: Number },
            display: { type: String },
          },
          quantity: { type: String },
          reference: { type: String },
        },
      },
      item: [
        {
          linkId: { type: String },
          text: { type: String },
          type: { type: String },
          extension: [
            {
              url: { type: String },
              value: {
                integer: { type: Number },
                instant: { type: String },
              },
            },
          ],
          enableWhen: {
            question: { type: String },
            operation: { type: String },
            answer: {
              boolean: { type: Boolean },
              decimal: { type: Number },
              integer: { type: Number },
              date: { type: Number },
              datetime: { type: String },
              time: { type: String },
              string: { type: String },
              quantity: { type: String },
              reference: { type: String },
              coding: {
                system: { type: String },
                code: { type: Number },
                display: { type: String },
              },
            },
          },
          required: { type: Boolean },
          disabled: {
            display: { type: String },
          },
          enableBehavior: { type: String },
          initial: {
            value: {
              boolean: { type: Boolean },
              decimal: { type: Number },
              integer: { type: Number },
              date: { type: String },
              datetime: { type: String },
              string: { type: String },
              uri: { type: String },
              attachment: { type: String },
              coding: {
                system: { type: String },
                code: { type: Number },
                display: { type: String },
              },
              quantity: { type: String },
              reference: { type: String },
            },
          },
        },
      ],
    },
  ],
  meta: [
    {
      lastUpdated: {
        type: String,
      },
      versionId: {
        type: String,
      },
      extension: [
        {
          url: { type: String },
          value: {
            integer: { type: Number },
            instant: { type: String },
          },
        },
      ],
    },
  ],
});

module.exports = mongoose.model(
  "questionnaire",
  questionnaireSchema,
  "questionnaire"
);
