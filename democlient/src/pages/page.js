import React, { Component } from "react";
import axios from "axios";
import { CopyToClipboard } from "react-copy-to-clipboard";

const firebaseApiKey = "AIzaSyA7_vAHKDIErc8SnpYXWQkBiNrWA7J68e0";
const local_url = "http://192.168.0.26:3000";
const deployed_url = "https://demotestclient.netlify.app/";
const api_url = "https://tranquil-earth-28487.herokuapp.com";

export default class Page extends Component {
  state = {
    user: "",
    url: "",
  };

  componentDidMount() {
    this.getUserByPage();
  }

  //I don't like this, but I don't know yet how to correctly pass a prop to a component from another file.
  getUserByPage = () => {
    const {
      match: { params },
    } = this.props;

    axios
      .get(`${api_url}/webs/byname/${params.pagename}`)
      .then((response) => {
        const user = response.data.data.user.username;
        this.setState({ user: user });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  shareLink = (pageName) => {
    const deepLink = `https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=${firebaseApiKey}`;
    const deepBody = {
      dynamicLinkInfo: {
        domainUriPrefix: "https://mynewcoolpage.page.link",
        link: `${deployed_url}/pages/${pageName}`,
        androidInfo: {
          androidPackageName: "com.example.android",
        },
        iosInfo: {
          iosBundleId: "com.example.ios",
        },
      },
    };

    axios
      .post(deepLink, deepBody)
      .then((response) => {
        console.log(response.data.shortLink);
        this.setState({ url: response.data.shortLink });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const pageName = this.props.match.params.pagename;
    return (
      <div>
        <h3 style={{ color: "#fff" }}>This page is for {this.state.user}</h3>
        <button
          className="btn btn-warning"
          onClick={() => this.shareLink(pageName)}
        >
          Share
        </button>
        <br />
        <li style={{ color: "#fff" }}>{this.state.url}</li>
        <CopyToClipboard text={this.state.url}>
          <button className="btn btn-primary">Copy URL to the clipboard</button>
        </CopyToClipboard>
      </div>
    );
  }
}
