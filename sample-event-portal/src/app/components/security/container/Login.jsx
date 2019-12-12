import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            password: ""
        }
    }

    componentDidMount(){
        let token = sessionStorage.getItem("token");
       
    }
    change(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    onSubmit(e) {

        e.preventDefault();
        fetch("http://localhost:9090/synauth", {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: new Headers({
                "Content-Type": "application/json"
            })
        })
            .then(
                response => response.json(),
                reason => Promise.reject(reason)
            )
            .then(
                authToken => {
                    if (authToken.token) {
                        sessionStorage.setItem("token", authToken.token);
                        this.props.history.push("/home");
                    }

                },
                reason => console.log(reason)
            )
    }
    render() {
        let title = "Synechron Events Portal Login";
        return (
            <div>
                <h1>{title}</h1>
                <hr />
                <form method="POST">
                    <fieldset>
                        <legend>New Event Registration</legend>
                        <div className="form-group">
                            <label htmlFor="userName">User Name</label>
                            <input type="text" className="form-control" id="userName" name="name" placeholder="Enter User Name" onChange={(e) => this.change(e)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Event Name</label>
                            <input type="password" className="form-control" id="password" name="password" placeholder="Enter your password" onChange={(e) => this.change(e)} />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={(e) => this.onSubmit(e)}>Login</button>
                    </fieldset>
                </form>
            </div>
        )
    }
}