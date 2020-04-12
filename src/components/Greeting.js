import React from "react";
import PropTypes from 'prop-types';

export class Greeting extends React.Component {
    constructor(props) {
        super();
        this.state = {text: props.name};
    }

    render() {
        return <h1>{this.state.text}</h1>;
    }
}

Greeting.propTypes = {
   name: PropTypes.string
};