import React, { Component } from 'react';
import Aux from '../../hoc/auxillary'
import classes from './textInput.module.css'

class TextInput extends Component {
    render() {
        return (
            <Aux>
                <input type={this.props.type} className={classes.input}></input>
            </Aux>
        );
    }
}

export default TextInput;