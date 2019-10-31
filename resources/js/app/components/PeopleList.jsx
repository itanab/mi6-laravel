import React from "react";

export default class PeopleList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null
        };
    }

    componentDidMount() {
        fetch("http://www.mi6.test/api/person")
            .then(response => response.json())
            .then(dataResponse => this.setState({ data: dataResponse }));
    }

    render() {
        return this.state.data
            ? this.state.data.map(agent => <li key={agent.id}>{agent.name}</li>)
            : "Loading..";
    }
}
