import mongoose from "mongoose";

var questionnaireResponseSchema = new mongoose.Schema({
    status: {type : String},
    item: {
        type : Array<Object>
    },
    questionnaire: {type : String}
});

module.exports = mongoose.model(
    'questionnaireResponse',
    questionnaireResponseSchema,
    'questionnaireResponse'
);