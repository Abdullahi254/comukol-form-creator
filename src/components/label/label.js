import React, { Component } from 'react';
import Aux from '../../hoc/auxillary'

class Label extends Component {
    render() {
        return (
            <Aux>
                <label style={{fontFamily:'ariel',fontWeight:'bold'}}>{this.props.children}</label>
            </Aux>
        );
    }
}

export default Label;