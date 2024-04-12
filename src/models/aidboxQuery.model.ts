import mongoose from "mongoose";

var aidboxQuerySchema = new mongoose.Schema({
    params : {
        type : String
    },
    Query : {
        type : String
    }
});

module.exports = mongoose.model(
    'aidboxQuery',
    aidboxQuerySchema,
    'aidboxQuery'
);