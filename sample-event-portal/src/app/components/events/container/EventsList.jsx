import React, { Component } from 'react'

import { NavLink } from 'react-router-dom';
//import { TEST_DATA } from "../../../../dummy-data";

//import EventDetails from '../presentation/EventDetails';

import eventsServiceObj from "../services/event-service";



export default class EventsList extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     events: [],//TEST_DATA.events,
        //     selectedEvent: null
        // }

        this.state = {
            events: [],//TEST_DATA.events,
        }
    }


    componentDidMount() {
        // fetch("http://localhost:9090/api/events").then(
        //     response => response.json(),
        //     reason => Promise.reject(reason)
        // ).then(
        //     data => this.setState({ events: data }),
        //     reason => console.log(reason)
        //     )
        this.updateComponent();

    }

    updateComponent() {
        let token = sessionStorage.getItem("token");
        if(token){
        eventsServiceObj.getAllEvents(token)
            .then(
            data => this.setState({
                events: data
            }),
            reason => console.log(reason)

            )
        }
        else{
            this.props.history.push("/Login");
        }
    }

    // onEventSelection(event) {
    //     this.setState({
    //         selectedEvent: event
    //     }, () => console.log(this.state));
    // }

    render() {
        let title = "Synechron Events List, Hyderabad!";
        let subTitle = "Events module - Development Team!";
        if (this.state.events.length > 0) {
            console.log("+++"+ JSON.stringify(this.state.events));
            return (
                <div>
                    <h1>{title}</h1>
                    <hr />
                    <h6>{subTitle}</h6>
                    <table className="table table-hower table-stripped">
                        <thead>
                            <tr>
                                <th>Event Code</th>
                                <th>Event name </th>
                                <th>Start Date</th>
                                <th>Fees</th>
                                <th>Show Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.events.map((event, idx) =>
                                    <tr key={idx}>
                                        <td>{event.eventId}</td>
                                        <td>{event.eventName}</td>
                                        {/* <td>{new Intl.DateTimeFormat("es-ES",
                                            {
                                                day: '2-digit',
                                                month: 'long',
                                                year: 'numeric'
                                            }).format(Date.parse(event.startDate))}</td> */}
                                        <td>{event.startDate}</td>
                                        <td>
                                            {new Intl.NumberFormat("en-IN",
                                                {
                                                    style: "currency",
                                                    currency: "INR",
                                                    maximumFractonDigits: 2,
                                                    minimumFractionDigits: 2
                                                }
                                            ).format(event.fees)}</td>
                                        <td>
                                            {/* <button className="btn btn-success" onClick={() => this.onEventSelection(event)}>Show Details</button> */}

                                            <NavLink className="btn btn-success" to={"/events/" + event.eventId}>Show Details</NavLink>

                                        </td>
                                    </tr>

                                )
                            }
                        </tbody>
                    </table>
                    {/* {
                        (() => {
                            if (this.state.selectedEvent !== null) {
                                return <EventDetails event={this.state.selectedEvent} />
                            }
                        })()
                    } */}
                </div>



            )
        }
        else {
            return (
                <div>
                    <h1>No records found</h1>
                </div>
            )
        }
    }
}
