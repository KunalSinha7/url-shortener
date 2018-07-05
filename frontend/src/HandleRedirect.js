import React, {
    Component
} from "react";
import "./App.css";
import axios from 'axios'
// import { Redirect } from 'react-router-dom'
import { Switch, Route } from "react-router-dom";


class HandleRedirect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            urlKey: props.match.params.urlKey,
            redirectLink: ""
        };
    }

    componentWillMount = () => {
        let that = this;
        let uri = 'http://localhost:7000/api/item/' + this.state.urlKey;
        axios.get(uri)
            .then(function (response) {
                that.setState({
                    redirectLink: response.data
                }, () => {
                    window.location = response.data
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return ( 
            <h1>Redirecting...</h1>
        )
    }
}

export default HandleRedirect;