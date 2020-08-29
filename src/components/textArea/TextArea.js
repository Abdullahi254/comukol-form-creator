import React, { Component } from 'react';
import Aux from '../../hoc/auxillary';
import classes from './TextArea.module.css'

class TextArea extends Component {
    render() {
        return (
            <Aux>
                <textarea className={classes.textArea}></textarea>
            </Aux>
        );
    }
}

export default TextArea;