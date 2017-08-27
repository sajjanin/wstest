import React, { Component } from 'react';

import Login from './Login'
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      rememberMe: true,
      username: '',
      password: ''
    }
  }

  onLogin = (e) => {
    e.preventDefault();
    alert(`Hello ${this.state.password}`);
  }

  onRememberMe = (e) => {
    this.setState({
      rememberMe: e.target.checked
    });
  }

  onInputChange = (field, value) => {
    this.setState({ [field]: value });
  }

  render() {
    return (
      <div className="main-container">
        <Login
          {...this.state}
          rememberMe={this.state.rememberMe}
          onLogin={this.onLogin}
          onRememberMe={this.onRememberMe}
          onInputChange={this.onInputChange}
        />
      </div>
    );
  }
}

export default App;
