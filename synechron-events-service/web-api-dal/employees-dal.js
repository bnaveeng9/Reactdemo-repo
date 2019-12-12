const mongojs = require("mongojs");
const db = mongojs("synechron-events-portal", ["employees"]);
class EmployeesDal {
    getAllEmployees() {
        return new Promise((resolve, reject) => {
            db.employees.find((err, docs) => {
                if (err) {
                    reject(err);
                }
                resolve(docs);
            });
        });


    }
    getSingleEmployee(id) {
        return new Promise((resolve, reject) => {
            db.employees.findOne({ "employeeId": Number.parseInt(id) }, (err, doc) => {
                if (err) {
                    reject(err);
                }
                resolve(doc);
            });
        });
    }
    insertNewEmployees(employee) {
        let newEvent = {
            ...employee,
            employeeId: Number.parseInt(employee.employeeId),
            employeeName: employee.employeeName,
            city: employee.city,
            
        }
        return new Promise((resolve, reject) => {
            db.events.insert(newEvent, (err, doc) => {
                if (err) {
                    reject(err);
                }
                resolve(doc);
            });
        });
    }
}

module.exports = new EmployeesDal();