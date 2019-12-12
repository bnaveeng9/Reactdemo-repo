import React, { Component } from 'react'

import EmployeesList from './components/employees/container/EmployeesList'

import { BrowserRouter } from "react-router-dom";

import MainLayout from "./MainLayout";

import Home from './components/home/presentation/home';

export default class RootComponent extends Component {
    render() {
        return (
            <BrowserRouter>
                <MainLayout/>
                
            </BrowserRouter>

        )
    }
}


