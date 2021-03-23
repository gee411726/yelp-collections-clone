
import React, { Component } from 'react';
import axios from 'axios';

var port = process.env.PORT || 5000;
var host = process.env.HOST || '0.0.0.0';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: ''
    }
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username
    }

    console.log(user);

    axios.post(`https://gentle-tundra-70710.herokuapp.com/api/users/add`, user)
      .then(res => console.log(res.data))
      .then(res => alert("new user successfully created!"));

    this.setState({
      username: ''
    })
  }

  render() {
    return (
      <div>
        <div className="component-title">Create New User</div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create User" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}