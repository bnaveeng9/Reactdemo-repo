import React, { Component } from 'react'

import EventDetails from '../presentation/EventDetails';

import eventsServiceObj from "../services/event-service";

export default class EventDetailsWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventDetails: null
        }
    }

    componentDidMount() {
        this.updateComponent();
    }

    updateComponent() {
        let token = sessionStorage.getItem("token");
        if(token)
        {
        eventsServiceObj.getAllEventDetails(token, Number.parseInt(this.props.match.params.id))
            .then(
            data => {
                console.log(data)
                this.setState({
                eventDetails: data
            })},
            reason => console.log(reason)

            )
        }
        else{
            this.props.history.push("/login");
        }
    }

    render() {
        if (this.state.eventDetails !== null) {
            console.log(this.state.eventDetails)
            return (
                <div>
                    <EventDetails event={this.state.eventDetails} />
                </div>
            )
        }
        else {
            return <h4>Event Details not found</h4>
        }
    }
}
