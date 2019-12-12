import { FETCH_ALL_EVENTS, FETCH_EVENT_DETAILS, REGISTER_NEW_EVENT } from "../action/sep-action-types";

const initialState = {
    events: [],
    event: null
}

const eventReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_ALL_EVENTS:
            state = {
                ...state,
                events: action.payload
            }
            break;
        case FETCH_EVENT_DETAILS:
            state = {
                ...state,
                event: action.payload
            }
            break;
        case REGISTER_NEW_EVENT:
            state = {
                ...state,
                events: action.payload
            }
            break;
    }
    return state;
}

export default eventReducer;