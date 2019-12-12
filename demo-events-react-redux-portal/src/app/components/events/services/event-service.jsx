class EventsService{
    constructor(){

    }

    getAllEvents(token){
        return fetch("http://localhost:9090/api/events",{
            headers: new Headers({
                "x-access-token":token
            })
        }).then(
            response => response.json(),
            reason => Promise.reject(reason)
        );
    }

    getAllEventDetails(token,eventId){
        return fetch(`http://localhost:9090/api/events/${eventId}`,{
            headers: new Headers({
                "x-access-token":token
            })
        }).then(
            response => response.json(),
            reason => Promise.reject(reason)
        );
    }

    registerNewEvent(token,event){
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
        );
    }
}

export default new EventsService();