import React, { Component } from "react";
import "./components.css";
import axios from 'axios';


export default class CreatUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username
    };

      console.log(user);

      axios
        .post("http://localhost:5000/users/add", user)
        .then((res) => console.log(res.data));

      
      this.setState({
        username: '',
      });
  }

  render() {
    console.log("Exercises List");

    return (
      <div className="text">
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label className="label">Username: </label>
            <input
              type="text"
              required
              className="form-control label"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create User"
              className="btn btn-primary submitButton"
            />
          </div>
        </form>
      </div>
    );
  }
}
