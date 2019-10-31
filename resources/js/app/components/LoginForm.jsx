import React from "react";

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: null,
            password: null
        };
    }

    handleEmailChange = () => {
      this.setState({
        email: document.querySelector("#email").value
      });
    }
    
    handlePasswordChange = () => {
      this.setState({
        password: document.querySelector("#password").value
      });
    }

    handleFormSubmit = (event) => {
      event.preventDefault();
      fetch("/api/login", {
        method: 'POST',
        headers: {
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
            'Accept': 'application/json',
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password
        })
      })
      .then(response => response.json())
      .then(response => this.props.loginSuccess(response.data.token))
    }
    
    
    render() {
        return (
          <form action="" onSubmit={this.handleFormSubmit}>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="email" id="email" name="email" onChange={this.handleEmailChange}/><br/>
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="password" name="password" id="password" onChange={this.handlePasswordChange}/><br/>
            <input type="submit" value="submit"/>
          </form>
        )
    }
}

