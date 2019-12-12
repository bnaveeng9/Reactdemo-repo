import {  FETCH_ALL_EMPLOYEES,FETCH_EMPLOYEE_DETAILS,REGISTER_NEW_EMPLOYEE} from "./sep-action-types";
import { SepStore  } from "../store/sepstore";

export const getAllEmployees = (token) => dispatch =>{
    return fetch("http://localhost:9090/api/employees",{
        headers: new Headers({
            "x-access-token":token
        })
    }).then(
        response => response.json(),
        reason => Promise.reject(reason)
    ).then(
        data => dispath({
            type: FETCH_ALL_EMPLOYEES,
            payload: data
        }),
        reason => SepStore.dispath({
            type: FETCH_ALL_EMPLOYEES,
            payload: reason
        })
    )
}

export const getEmployeeDetails = (token,employeeId) => dispatch => {
    return fetch(`http://localhost:9090/api/employees/${employeeId}`,{
        headers: new Headers({
            "x-access-token":token
        })
    }).then(
        response => response.json(),
        reason => Promise.reject(reason)
    ).then(
        data => dispath({
            type: FETCH_EMPLOYEE_DETAILS,
            payload: data
        }),
        reason => SepStore.dispath({
            type: FETCH_EMPLOYEE_DETAILS,
            payload: reason
        })
    )
}

export const registerNewEmployee = (token,employee) => dispatch => {
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
    ).then(
        data => dispath({
            type: REGISTER_NEW_EMPLOYEE,
            payload: data
        }),
        reason => SepStore.dispath({
            type: REGISTER_NEW_EMPLOYEE,
            payload: reason
        })
    )
}

