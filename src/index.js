import ReactDOM from "react-dom";
import "./styles.css";
import React, { Component } from "react";
import Dashboard from "./Dashboard.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      pwd: "",
      username: "precious",
      password: "halo",
      login: false
    };
  }

  inputHandler = event => {
    const { name, pwd, password, username } = this.state;
    if (name === username && pwd === password) {
      this.setState({ login: true });
    } else {
      this.setState({ login: false });
      alert("Invalid login credentials!!");
    }
  };

  render() {
    const { name, login } = this.state;
    if (!login) {
      return (
        <center>
          <div>
            <h1 style={{ backgroundColor: "aqua" }}>login form</h1>
            <input
              style={{
                height: "30px",
                width: "200px"
              }}
              type="text"
              placeholder="Username"
              onChange={event => this.setState({ name: event.target.value })}
              required
            />
            <br />
            <br />
            <input
              style={{
                height: "30px",
                width: "200px"
              }}
              type="password"
              placeholder="Password"
              onChange={event => this.setState({ pwd: event.target.value })}
              required
            />
            <br />
            <br />
            <div>
              <button
                style={{
                  backgroundColor: "orange",
                  height: "30px",
                  width: "100px"
                }}
                onClick={event => this.inputHandler(event)}
              >
                Login
              </button>
            </div>
            <div />
          </div>
        </center>
      );
    } else {
      return (
        <div>
          <Dashboard name={name} />
        </div>
      );
    }
  }
}
export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
