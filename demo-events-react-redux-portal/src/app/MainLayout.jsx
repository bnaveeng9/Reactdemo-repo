import React, { Component, Suspense, lazy } from 'react'

import SepMenu from "./components/navigation/presentation/SepMenu";
import { Route, Switch } from "react-router-dom";
import Login from './components/security/container/Login';


const EmployeesList = lazy(()=> import('./components/employees/container/EmployeesList'));
const EmployeeDetails = lazy( () => import('./components/employees/container/EmployeeDetailsWrapper'));

const EventDetails = lazy( () => import('./components/events/container/EventDetailsWrapper'));
const Events = lazy( () => import('./components/events/container/EventsList'));

const SyneEventsHome = lazy(() => import('./components/home/presentation/home') )

const RegisterNewEmployee = lazy(() => import('./components/employees/container/RegisterNewEmployee'));
const RegisterNewEvent = lazy(() => import('./components/events/container/RegisterNewEvents'));
export default class MainLayout extends Component {
    constructor(props){
        super(props);

    }
    render() {
        return (
            <div>
                <SepMenu/>

                <main>
                    <Suspense fallback ={ <h6> Loading........ </h6> }>
                    <Switch>
                    <Route path="/" component={SyneEventsHome} exact/>
                        <Route path="/home" component ={SyneEventsHome} exact />

                        <Route path= "/Employees" component={ EmployeesList } exact/>
                        <Route path= "/Employees/:id" render={props => <EmployeeDetails {...props} />} />

                        <Route path= "/Events" component={ Events } exact/>
                        <Route path= "/Events/:id" render={props => <EventDetails {...props} />} />

                        <Route path= "/Login" render={props => <Login  {...props}/>} />

                        <Route path="/newevent" render={props=> <RegisterNewEvent {...props} />} exact />
                        <Route path="/newemployee" render={props=> <RegisterNewEmployee {...props} />} exact />
                    </Switch>
                    </Suspense>

                </main>

                {/* <main>
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
                </main> */}
            </div>
        )
    }
}
