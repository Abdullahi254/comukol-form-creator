import React,{Component} from 'react'
import classes from './row.module.css'
import FieldName from '../fieldName/FieldName'
import InputType from '../InputTyoe/InputType'

class Row extends Component{
    render(){
        return( 
            <div className={classes.row}>
                <FieldName/>
                <InputType/>
                <button onClick = {this.props.next} className={classes.next}>next</button>
                <button className={classes.del} onClick={this.props.del}>Del</button>
            </div>
        )
    }
}

export default Row