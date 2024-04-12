import mongoose from "mongoose";

var pathwaySchema = new mongoose.Schema({
    pathway_details : {
        pathway_name : {
            type : String
        }
    }
});

module.exports = mongoose.model(
    'pathway',
    pathwaySchema,
    'pathway'
);