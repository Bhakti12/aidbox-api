import mongoose from "mongoose";

var careplan_pathway = new mongoose.Schema({
    careplan_id : {
        type : String
    },
    pathway_id : {
        type : String
    }
});

module.exports = mongoose.model(
    'careplan_pathway',
    careplan_pathway,
    'careplan_pathway'
);