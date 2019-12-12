import React, { Component } from 'react'

import eventsServiceObj from "../services/event-service";

export default class RegisterNewEvents extends Component {

    constructor(props) {
        super(props);
        this.state = {
            eventId: 0,
            eventCode: 'No Code',
            eventName: 'No Name',
            description: '',
            startDate: new Date(),
            endDate: new Date(),
            fees: 0,
            seatsFilled: 0,
            logo: 'images/noimage.png'
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
        eventsServiceObj.registerNewEvent(this.state).then(
            data => this.props.history.push("/events"),
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
                            <label htmlFor="eventId">Event Id</label>
                            <input type="number" className="form-control" id="eventId" placeholder="Enter Event Id" name="eventId"
                                required="required" onChange={e => this.onChange(e)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="eventCode">Event Code</label>
                            <input type="text" className="form-control" id="eventCode" placeholder="Enter Event Code" name="eventCode"
                                required="required" onChange={e => this.onChange(e)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="eventName">Event Name</label>
                            <input type="text" className="form-control" id="eventName" placeholder="Enter Event Name" name="eventName"
                                required="required" onChange={e => this.onChange(e)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Event Description</label>
                            <input type="text" className="form-control" id="description" placeholder="Enter Event Description"
                                name="description" onChange={e => this.onChange(e)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="startDate">Event Start Date</label>
                            <input type="date" className="form-control" id="startDate" placeholder="Enter Event Start Date"
                                name="startDate" onChange={e => this.onChange(e)} />
                        </div>
                        <div className="form-group"> 
                            <label htmlFor="endDate">Event End Date</label>
                            <input type="date" className="form-control" id="startDate" placeholder="Enter Event End Date"
                                name="endDate" onChange={e => this.onChange(e)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="fees">Event Fees</label>
                            <input type="number" className="form-control" id="fees" placeholder="Enter Event Id" name="fees"
                                required="required" onChange={e => this.onChange(e)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="seatsFilled">Event Seats Filled</label>
                            <input type="number" className="form-control" id="seatsFilled" placeholder="Enter Total Registration"
                                name="seatsFilled" required="required" onChange={e => this.onChange(e)} />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={(e) => this.onEventSubmit(e)}>Register New Event</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}
