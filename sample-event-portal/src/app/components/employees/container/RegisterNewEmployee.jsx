import React, { Component } from 'react'

import employeesServiceObj from "../services/employee-service";

export default class RegisterNewEmployee extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employeeId: "000",
            employeeName: "",
            address: "Mooncity, B8/404",
            city: "Mumbai",
            zipcode: 510512,
            phone: "+91 30003000",
            email: "alisha.c@synechron.com",
            skillSets: "Java",
            country: "India",
            avatar: "images/noimage.png"
        }
    }

    onChange(e) {
        
        this.setState({
            [e.target.name]: e.target.value
        })

    }

    onEventSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        employeesServiceObj.registerNewEmployee(this.state).then(
            data => this.props.history.push("/employees"),
            reason => console.log(reason) 
        )

    }

    render() {
        let title = "New Event Registration Form";
        return (
            <div>
                <h1>{title}</h1>
                <form>
                    <fieldset>
                        <legend>Event Registration Form for HR!</legend>
                        <div className="form-group">
                            <label htmlFor="employeeId">Employee Id</label>
                            <input type="number" className="form-control" id="employeeId" placeholder="Enter Event Id" name="eventId"
                                required="required" onChange={e => this.onChange(e)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="employeeName">Employee Name</label>
                            <input type="text" className="form-control" id="employeeName" placeholder="Enter employee Name" name="employeeName"
                                required="required" onChange={e => this.onChange(e)} />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={(e) => this.onEventSubmit(e)}>Register New Employee</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}
