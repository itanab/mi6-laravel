import React from 'react';
import PeopleList from "./PeopleList.jsx";
import LoginForm from './LoginForm.jsx';
 
export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            logged_in: false,
            token: null
        };
    }

    onLoginSuccess = (token) => {
 
        window.localStorage.setItem('_token', token)
     
        this.setState({
            logged_in: true,
            token: token
        })
    }

    render() {
            if (this.state.logged_in === null) {
                return "Loading.."
            } else if (this.state.logged_in) {
                return (
                    <PeopleList/>
            )} else {
                return (
                    <LoginForm
                    token={this.onLoginSuccess}
                    />
                )
            }
            
    }
}