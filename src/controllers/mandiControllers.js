import mongoose from 'mongoose';
import {ReportSchema} from "../models/mandiModels.js";

const Report = mongoose.model('Report', ReportSchema);

export const addNewReport = (req, res) =>{
    let newReport = new Report(req.body);

    newReport.save((err, report) => {
        if(err){
            res.send(err);
        }
        res.json(report);
    });
}

export const getReport = (req, res) =>{
    Report.find({}, (err, report) => {
        if(err){
            res.send(err);
        }else{
        res.json(report);
    }
    });
      
}
export const getReportWithID = (req, res) =>{
    Report.findById(req.params.reportID, (err, report) => {
        if(err){
            res.send(err);
        }else{
            Report.find({cmdtyName : {$eq:report.cmdtyName}}, (err, report1) => {
                if(err){
                    res.send(err);
                }else{
                    var sum = 0;
                    var i = 0;
                    var user = [];
                    var cmdtyName, cmdtyID, marketID, marketName;
                    var results = Report.find({cmdtyName : {$eq:report1.cmdtyName}}, (err, report2) => {
                        for(let iteration of report1){
                            sum = sum + iteration.price/iteration.convFctr;
                            i++;
                            user.push(iteration.userID);
                            cmdtyName = iteration.cmdtyName;
                            cmdtyID = iteration.cmdtyID;
                            marketID = iteration.marketID;
                            marketName = iteration.marketName;
                            
                        }
                        var avgPrice = sum/i;
                        var resObj = {
                        "cmdtyName": cmdtyName,
                        "cmdtyID": cmdtyID,
                        "marketID": marketID,
                        "marketName": marketName,
                        "userID": user,
                        "priceUnit": "Kg",
                        "price": avgPrice,
                        
                    };
                    res.json(resObj);
                    });
                    
                }
            });
        }
        
        });
} 