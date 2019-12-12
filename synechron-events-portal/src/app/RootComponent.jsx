import React, { Component } from "react";

import { BrowserRouter } from "react-router-dom";

import MainLayout from "./MainLayout";

// import EmployeesList from "./components/employees/container/EmployeesList";

// import EventsList from "./components/events/container/EventsList";
// import SepMenu from "./components/navigation/presentation/SepMenu";

export default class RootComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            // <div>
            //     <SepMenu/>
            //     <EmployeesList /> 
            //     <EventsList />
            // </div>
            <BrowserRouter>
                <MainLayout/>
            </BrowserRouter>
        )
    }
}