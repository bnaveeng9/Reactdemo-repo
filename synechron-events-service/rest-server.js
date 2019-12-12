const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const eventsRoutes = require("./events-routes");
const employeesRoutes = require("./employees-route");
const jwt = require("jsonwebtoken");
const morgan = require("morgan");
const mongojs = require("mongojs");
const auth = mongojs("synechron-events-portal", ["users"]);
const config = require("./config");

const app = express();
app.set("syneSecret", config.secret);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));

app.post("/synauth", (request, response) => {
    console.log(request.body.name)
    console.log(request.body.password)
    auth.users.findOne({
        name: request.body.name
    }, (err, user) => {
        if (err) throw err;
        if (!user) {
            response.json({
                success: false,
                message: "Access Denied! Please check your user name!"
            });
        }
        else if (user) {
            if (user.password !== request.body.password) {
                response.json({
                    success: false,
                    message: "Access Denied! Please check your password!"
                });
            }
            else {
                let token = jwt.sign(user, app.get("syneSecret"), {
                    expiresIn: 2000
                });
                response.json({
                    success: true,
                    message: "Store this token for further communication",
                    token: token
                });
            }
        }
    })
});

app.use((request, response, next) => {
    let token = { token: request.body.token || request.query.token || request.headers["x-access-token"] };
    jwt.verify(token.token, app.get("syneSecret"), (err, decoded) => {
        if (err) {
            response.json({
                success: false,
                message: "We were unable to verify your token!"
            });
        }
        else {
            next();
        }
    });
});

app.use("/api/events", eventsRoutes);
app.use("/api/employees", employeesRoutes);
app.listen(9090, () => {
    console.log("REST API server is running on PORT : 9090");
});