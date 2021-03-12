import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/login.css";
import axios from "axios";
import { FaUser, FaLock } from "react-icons/fa";

const url_api = "https://tranquil-earth-28487.herokuapp.com";

export default class Login extends Component {
  state = {
    form: {
      username: "",
      password: "",
    },
  };

  handleChange = (input) => {
    this.setState({
      form: {
        ...this.state.form,
        [input.target.name]: input.target.value,
      },
    });
  };

  login = () => {
    let user = { ...this.state.form };
    console.log(user);
    axios
      .post(`${url_api}/login`, {
        username: this.state.form.username,
        password: this.state.form.password,
      })
      .then((response) => {
        const { _id, username } = response.data.data;
        localStorage.setItem("id", _id);
        localStorage.setItem("username", username);
        window.location.href = "./dashboard";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="login-box">
        <h1>Login</h1>
        <div className="text-box">
          <FaUser />
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={this.handleChange}
          />
        </div>
        <div className="text-box">
          <FaLock />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={this.handleChange}
          />
        </div>
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => this.login()}
        >
          Log In
        </button>
      </div>
    );
  }
}
