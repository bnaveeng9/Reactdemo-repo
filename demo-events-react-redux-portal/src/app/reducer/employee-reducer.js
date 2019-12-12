import {  } from "../action/sep-action-types";

const employeeinitialState = {
    employees:[],
    employee: null
}

const employeeReducer = (state = employeeinitialState, action) => {
    switch (action.type) {
        case "FETCH_ALL_EMPLOYEES":
            state = {
                ...state,
                employees = action.payload
            }
            break;
        case "FETCH_EMPLOYEE_DETAILS":
            state = {
                ...state,
                employee = action.payload
            }
            break;
        case "REGISTER_NEW_EMPLOYEE":
            state = {
                ...state,
                employee = action.payload
            }
            break;
        default:
            break;
    }
}

export default employeeReducer;