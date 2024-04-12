import mongoose from "mongoose";

var formtypes_pathway = new mongoose.Schema({
    formtypes_id : {
        type : String
    },
    pathway_id : {
        type : String
    }
});

module.exports = mongoose.model(
    'formtypes_pathway',
    formtypes_pathway,
    'formtypes_pathway'
);