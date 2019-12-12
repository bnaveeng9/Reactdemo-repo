const express = require("express");
const eventRoutes = express.Router();
const eventsObj = require('./web-api-dal/events-dal');

//defaultUrl
eventRoutes.get("/", (request, response) => {
    let promise = eventsObj.getAllEvents();
    promise.then((data) => {
        response.json(data);
    },
        (err) => {
            response.send(err);
        });
});
eventRoutes.get("/:id", (request, response) => {
    let id = request.params.id;
    let promise = eventsObj.getSingleEvent(id);
    promise.then((data) => {
        response.json(data);
    },
        (err) => {
            response.send(err);
        });
});
eventRoutes.post("/", (request, response) => {
    console.log(request.body);
    let promise = eventsObj.insertNewEvent(request.body);
    promise.then((data) => {
        response.json(data);
    },
        (err) => {
            response.send(err);
        });
});

module.exports = eventRoutes;