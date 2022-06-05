import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ReportSchema = new Schema({
    userID: {
        type: String,
        required: "Enter userID"
    },
    marketID: {
        type: String,
        requires: "Enter marketID"
    },
    marketName:{
        type: String,
        required: "Enter marketName"
    },
    cmdtyID:{
        type: String,
        required: "Enter cmdtyID"
    },
    marketType:{
        type: String,
        required: "Enter marketType"
    },
    cmdtyName:{
        type: String,
        required: "Enter cmdtyName"
    },
    priceUnit:{
        type: String,
        required: "Enter priceUnit"
    },
    convFctr: {
        type: Number,
        required: "Enter convFctr"
    },
    price: {
        type: Number,
        required: "Enter price"
    },
    created_date:{
        type: Date,
        default: Date.now
    }
});