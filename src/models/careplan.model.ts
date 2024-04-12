import mongoose from "mongoose";

var careplan = new mongoose.Schema({
    title : {
        type : String
    },
    intent : {
        type : String
    },
    Status : {
        type : String
    },
    Subject : {
        id : {
            type : String
        },
        resourceType : {
            type : String
        }
    },
    description : {
        type : String
    }
});

module.exports = mongoose.model(
    'careplan',
    careplan,
    'careplan'
);