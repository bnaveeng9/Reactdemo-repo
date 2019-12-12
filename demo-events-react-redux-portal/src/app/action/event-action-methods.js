//import {FETCH_ALL_EMPLOYEES,FETCH_EMPLOYEE_DETAILS,REGISTER_NEW_EMPLOYEE} from "./sep-action-types";
import {FETCH_ALL_EVENTS,FETCH_EVENT_DETAILS,REGISTER_NEW_EVENT} from "./sep-action-types";

import { SepStore  } from "../store/sepstore";




export const getAllEvents = (token) => dispath =>{
    return fetch("http://localhost:9090/api/events",{
        headers: new Headers({
            "x-access-token":token
        })
    }).then(
        response => response.json(),
        reason => Promise.reject(reason)
    ).then(
        data => dispath({
            type: FETCH_ALL_EVENTS,
            payload: data
        }),
        reason => SepStore.dispath({
            type: FETCH_ALL_EVENTS,
            payload: reason
        })
    )
}

export const getAllEventDetails = (token,eventId) => dispath =>{
    return fetch(`http://localhost:9090/api/events/${eventId}`,{
        headers: new Headers({
            "x-access-token":token
        })
    }).then(
        response => response.json(),
        reason => Promise.reject(reason)
    ).then(
        data => dispath({
            type: FETCH_EVENT_DETAILS,
            payload: data
        }),
        reason => SepStore.dispath({
            type: FETCH_EVENT_DETAILS,
            payload: reason
        })
    )
}

export const registerNewEvent = (token,event)=> dispatch =>{
    console.log(JSON.stringify(event));
    return fetch("http://localhost:9090/api/events", {
        method:"POST",
        body: JSON.stringify(event),
        headers: new Headers({
            "Content-type": "application/json",
            "x-access-token":token
        })
    }).then(
        response => response.json(),
        reason => Promise.reject(reason)
    ).then(
        data => dispath({
            type: REGISTER_NEW_EVENT,
            payload: data
        }),
        reason => SepStore.dispath({
            type: REGISTER_NEW_EVENT,
            payload: reason
        })
    )
}


