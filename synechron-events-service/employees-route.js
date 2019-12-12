const express = require("express");
const employeeRoute = express.Router();
const employeeObj = require('./web-api-dal/employees-dal');

//defaultUrl
employeeRoute.get("/", (request, response) => {
    let promise = employeeObj.getAllEmployees();
    promise.then((data) => {
        response.json(data);
    },
        (err) => {
            response.send(err);
        });
});
employeeRoute.get("/:id", (request, response) => {
    let id = request.params.id;
    let promise = employeeObj.getSingleEmployee(id);
    promise.then((data) => {
        response.json(data);
    },
        (err) => {
            response.send(err);
        });
});
employeeRoute.post("/", (request, response) => {
    console.log(request.body);
    let promise = employeeObj.insertNewEvent(request.body);
    promise.then((data) => {
        response.json(data);
    },
        (err) => {
            response.send(err);
        });
});

module.exports = employeeRoute;