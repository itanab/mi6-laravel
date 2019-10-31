import React from 'react';
import PeopleList from "./PeopleList.jsx";
 
export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            logged_in: null,
            token: null
        };
    }

    render() {
            if (this.state.logged_in === null) {
                return "Loading.."
            } else if (this.state.logged_in) {
            return (
                <PeopleList/>
            )} else {
                return <h1>Login form</h1>
            }
            
    }
}