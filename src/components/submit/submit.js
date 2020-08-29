import React, { Component } from 'react';
import classes from "./submit.module.css";
import Aux from '../../hoc/auxillary'

class Submit extends Component {
    render() {
        return (
            <Aux>
                <input type="submit" value='Print' className={classes.Submit}></input>
            </Aux>
        );
    }
}

export default Submit;