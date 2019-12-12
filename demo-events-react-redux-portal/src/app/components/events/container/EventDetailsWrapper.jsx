import React, { Component } from 'react'

import EventDetails from '../presentation/EventDetails';

import eventsServiceObj from "../services/event-service";

import {connect} from 'react-redux';

import {getAllEventDetails} from "../../../action/event-action-methods";
import { eventReducer } from "../../../reducer/event-reducer";


class EventDetailsWrapper extends Component {
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
            this.props.getAllEventDetails(token, Number.parseInt(this.props.match.params.id));
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

const mapStateToProps = (state) => ({
    eventDetails: state.eventReducer
})

export default connect(mapStateToProps, {getAllEventDetails} )(EventDetails);