import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: null
        };
        this.onusernameChange = this.onusernameChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    onusernameChange(event) {
        this.setState({ username: event.target.value });
    }

    submitForm(event) {
        event.preventDefault();
        const userObj = {
            username: this.state.username
        }
        axios.post("http://localhost:5001/users/add", userObj).then(resp => console.log(resp)).catch(err => console.error(err));
    }

    render() {
        return (
            <div>
                <h3>Create New User</h3>
                <form onSubmit={this.submitForm}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input type="text"
                            required
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onusernameChange}
                        />
                    </div><br />
                    <div className="form-group">
                        <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
}