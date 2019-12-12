import React, { Component } from 'react'
import EmployeeDetails from '../presentation/EmployeeDetails';

import employeeServiceObj from "../services/employee-service";
export default class EmployeeDetailsWrapper extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employeeDetails: null
        }
    }

    componentDidMount() {
        this.updateComponent();
    }

    updateComponent() {

        let token = sessionStorage.getItem("token");
        if (token) {
            employeeServiceObj.getEmployeeDetails(token,Number.parseInt(this.props.match.params.id)).then(
                data => {
                    console.log(data)
                    this.setState({
                        employeeDetails: data
                    })
                },
                reason => console.log(reason)
            );
        }

    }

    render() {
        if (this.state.employeeDetails !== null) {
            console.log(this.state.employeeDetails)
            return (
                <div>
                    <EmployeeDetails employee={this.state.employeeDetails} />
                </div>
            )
        }
        else {
            return <h4>Event Details not found</h4>
        }
    }
}
