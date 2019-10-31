import React from "react";

export default class PeopleList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null
        };
    }

    componentDidMount() {
        fetch("/api/person", {
            headers: {'Authorization': 'Bearer ' + this.props.token}
        })
            .then(response => response.json())
            .then(dataResponse => this.setState({ data: dataResponse }));
    }

    render() {
        return this.state.data
            ? this.state.data.map(agent => <div  key={agent.id} className="peopleBox">
                <p>{agent.name}</p>
                <img className="peopleImg" src={`/images/${agent.image.image_url}`} alt=""/>
                </div>)
            : "Loading..";
    }
}

