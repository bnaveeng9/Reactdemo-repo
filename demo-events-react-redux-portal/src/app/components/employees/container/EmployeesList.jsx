import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { TEST_DATA } from "../../../../dummy-data";
import EmployeeDetails from "../presentation/EmployeeDetails";
import EmployeeServicesObj from "../services/employee-service";
export default class EmployeesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: [], // TEST_DATA.employees,
            selectedEmployee: null
        }
    }
    onEmployeeSelection(employee) {
        this.setState({
            selectedEmployee: employee
        }, () => console.log(this.state));
    }

    componentDidMount() {
        this.updateComponent();
    }

    updateComponent() {
        let token = sessionStorage.getItem("token");
        if (token) {
           
            EmployeeServicesObj.getAllEmployees(token).then(
                data => {
                    console.log(data)
                    this.setState({
                        employees: data
                    })
                },
                reason => console.log(reason)
            );

        }
    }
    render() {
        let title = "Synechron Employees List, Hyderabad!";
        let subTitle = "Core Development Team!";
        return (
            <div>
                <h1>{title}</h1>
                <hr />
                <h6>{subTitle}</h6>
                <br />
                <table className="table table-hover table-striped">
                    <thead>
                        <tr>
                            <th>Employee Name</th>
                            <th>City</th>
                            <th>Email</th>
                            <th>Contact #</th>
                            <th>Show Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.employees.map((employee, idx) =>
                                <tr key={idx}>
                                    <td>{employee.employeeName}</td>
                                    <td>{employee.city}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.phone}</td>
                                    <td>
                                        {/* <button className="btn btn-success" onClick={() => this.onEmployeeSelection(employee)}>Show Details</button> */}
                                        <NavLink className="btn btn-success" to={"/employees/" + employee.employeeId}>Show Details</NavLink>
                                    </td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
                {/* {
                    (() => {
                        if (this.state.selectedEmployee !== null) {
                            return <EmployeeDetails employee={this.state.selectedEmployee} />
                        }
                    })()
                } */}
            </div>
        )
    }
}
