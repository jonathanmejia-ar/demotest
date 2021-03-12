import React, { Component } from "react";
import "../css/dashboard.css";
import axios from "axios";
import { Link } from "react-router-dom";

const api_url = "https://tranquil-earth-28487.herokuapp.com";

export default class Dashboard extends Component {
  state = {
    data: {
      pagename: "",
      user: localStorage.getItem("id"),
    },
    webs: [],
  };

  getWebs = () => {
    axios
      .get(`${api_url}/webs`)
      .then((response) => {
        this.setState({ webs: response.data.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getWebs();
  }

  createPage = () => {
    axios
      .post(`${api_url}/webs`, {
        name: this.state.data.pagename,
        user: this.state.data.user,
      })
      .then((response) => {
        this.setState({
          data: {
            ...this.state.data,
            pagename: "",
          },
          webs: [...this.state.webs, response.data.data],
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  logout = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("username");
    window.location.href = "./";
  };

  handleChange = (e) => {
    this.setState({
      data: {
        ...this.state.data,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    return (
      <div className="container">
        <button className="btn btn-danger" onClick={() => this.logout()}>
          Log Out
        </button>
        <h1>Dashboard</h1>
        <input
          value={this.state.data.pagename}
          type="text"
          placeholder="Page name"
          className="form-control"
          name="pagename"
          onChange={this.handleChange}
        />
        <button className="btn btn-primary" onClick={() => this.createPage()}>
          Add Webpage
        </button>

        {this.state.webs.map((web) => (
          <ul key={web._id}>
            <li>
              <Link to={`/pages/${web.name.toLowerCase()}`}>{web.name}</Link>
            </li>
          </ul>
        ))}
      </div>
    );
  }
}
