import React from 'react';
import PropTypes from 'prop-types';

const EmployeeDetails = props => {
    let title = "Details of - ";
    console.log("++++++++++++++++ " + JSON.stringify(props.employee));
    return (
        <div>
            <h1>{title + props.employee.employeeName}</h1>
            <br />
            <table className="table table-hover table-striped">
                <tbody>
                    <tr>
                        <th>Employee Id</th>
                        <td>{props.employee.employeeId}</td>
                    </tr>
                    <tr>
                        <th>Employee Name</th>
                        <td>{props.employee.employeeName}</td>
                    </tr>
                    <tr>
                        <th>Address</th>
                        <td>{props.employee.address}</td>
                    </tr>
                    <tr>
                        <th>City</th>
                        <td>{props.employee.city}</td>
                    </tr>
                    <tr>
                        <th>Zipcode</th>
                        <td>{props.employee.zipcode}</td>
                    </tr>
                    <tr>
                        <th>Contact #</th>
                        <td>{props.employee.phone}</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>{props.employee.email}</td>
                    </tr>
                    <tr>
                        <th>Skillsets</th>
                        <td>{props.employee.skillSets}</td>
                    </tr>
                    <tr>
                        <th>Country</th>
                        <td>{props.employee.country}</td>
                    </tr>
                    <tr>
                        <th>Avatar</th>
                        <td>
                            <img src={'../'+props.employee.avatar} alt={props.employee.employeeName}/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

EmployeeDetails.propTypes = {
    employee: PropTypes.object.isRequired
}

export default EmployeeDetails;
