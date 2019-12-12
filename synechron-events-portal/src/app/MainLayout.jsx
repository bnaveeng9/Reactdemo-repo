import React, { Component, Suspense, lazy } from 'react'

import { Route, Switch } from "react-router-dom";

import SepMenu, { } from "./components/navigation/presentation/SepMenu";

import SyneEventsHome from "./components/Home/presentation/Home";
//import EmployeeDetails from './components/employees/presentation/EmployeeDetails';

import EventDetails from './components/events/container/EventDetailsWrapper';
const Employees = lazy(()=> import("./components/employees/container/EmployeesList"));

const Events = lazy(()=> import("./components/events/container/EventsList"));

const RegisterNewEvent = lazy(()=> import("./components/events/container/RegisterNewEvents"));

const SepLogin = lazy(()=> import("./components/security/container/Login"))

export default class MainLayout extends Component {
    constructor(props){
        super(props);
        console.log(props);
    }
    render() {
        return (
            <div>
                <SepMenu/>

                <main>
                    <Suspense fallback ={<h3>loading.....</h3> } >
                    <Switch>
                        <Route path="/" component={SyneEventsHome} exact/>
                        <Route path="/home" component ={SyneEventsHome} exact />
                        <Route path="/employees" render={props=> <Employees {...props} />} exact />
                        <Route path="/employees/test" render={props=> <h1> Test1 route </h1>} />
                        <Route path="/employees/test2" render={props=> <h1> Test2 route </h1>} />
                        <Route path="/events" render={props=> <Events {...props} />} exact />
                        <Route path="/events/:id" render={props=> <EventDetails {...props} />}  />
                        <Route path="/newevent" render={props=> <RegisterNewEvent {...props} />} exact />

                        <Route path="/login" render={props=> <SepLogin {...props} />} exact />

                        </Switch>
                    </Suspense>
                </main>
            </div>
        )
    }
}
