class EmployeesService{
    constructor(){

    }

    getAllEmployees(token){
        return fetch("http://localhost:9090/api/employees",{
            headers: new Headers({
                "x-access-token":token
            })
        }).then(
            response => response.json(),
            reason => Promise.reject(reason)
        );
    }

    getEmployeeDetails(token,employeeId){
        return fetch(`http://localhost:9090/api/employees/${employeeId}`,{
            headers: new Headers({
                "x-access-token":token
            })
        }).then(
            response => response.json(),
            reason => Promise.reject(reason)
        );
    }

    registerNewEmployee(token,employee){
        console.log(JSON.stringify(employee));
        return fetch("http://localhost:9090/api/employees", {
            method:"POST",
            body: JSON.stringify(employee),
            headers: new Headers({
                "Content-type": "application/json",
                "x-access-token":token
            })
        }).then(
            response => response.json(),
            reason => Promise.reject(reason)
        );
    }
}

export default new EmployeesService();