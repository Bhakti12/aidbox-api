import mongoose from "mongoose";

var formtypeSchema = new mongoose.Schema({
    status : {
        type : String
    },
    form_name : {
        type : String
    },
    form_code : {
        type : String
    },
    description : {
        type : String
    },
    form_fill_stage : {
        type : String
    },
    form_filled_by : {
        type : String
    },
    form_accessed_by : {
        type : String
    }
});

module.exports = mongoose.model(
    'formtypes',
    formtypeSchema,
    'formtypes'
);