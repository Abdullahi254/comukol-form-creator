import React,{Component} from 'react'
import classes from './row.module.css'
import FieldName from '../fieldName/FieldName'
import InputType from '../InputTyoe/InputType'

class Row extends Component{
    render(){
        return( 
            <div className={classes.row}>
                <FieldName labelId={this.props.labelId}/>
                <InputType inputId={this.props.inputId}/>
                <div className={classes.buttons}>
                <button className={classes.del} onClick={this.props.del}>Del</button>
                    <button onClick = {this.props.next} className={classes.next}>next</button>
                </div>
            </div>
        )
    }
}

export default Row