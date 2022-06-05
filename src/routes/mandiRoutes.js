import {addNewReport,
        getReport,
        getReportWithID

} from "../controllers/mandiControllers.js";

const routes =(app) => {
    app.route('/reports')
        .get((req, res, next) => {
            //middleware
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type: ${req.method}`);
            next();
        }, getReport)
        .post(addNewReport);
    app.route('/reports/:reportID')
        .get(getReportWithID);
}

export default routes;