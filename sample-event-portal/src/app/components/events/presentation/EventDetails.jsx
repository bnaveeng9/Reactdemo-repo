import React from 'react'
import PropTypes from 'prop-types'

const EventDetails = props => {
    let title = "Event details of  - "
    return (
        <div>
            <h1>{title + props.event.eventName }</h1>
            <br/>
            <table className="table table-hover table-striped">
                <tbody>
                    <tr>
                        <th>Event id</th>
                        <td>{props.event.eventId}</td>
                    </tr>
                    <tr>
                        <th>event Name</th>
                        <td>{props.event.eventName}</td>
                    </tr>
                    <tr>
                        <th>Event Start Date</th>
                        <td>{props.event.startDate.toString()}</td>
                    </tr>
                    <tr>
                        <th>Fees</th>
                        <td>{props.event.fees}</td>
                    </tr>
                    <tr>
                        <th></th>
                        <td></td>
                    </tr>
                </tbody>
            </table>

          


        </div>
    )
}

EventDetails.propTypes = {

}

export default EventDetails
