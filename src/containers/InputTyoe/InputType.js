import React,{Component} from 'react'
import classes from './InputType.module.css'
import CheckBox from '../CheckBox/CheckBox'
import {connect} from 'react-redux'

class InputType extends Component{
    state = {
        optionType:'text',
        selected:false,
    }
    getOption = (event)=>{
        this.setState({
            optionType:event.target.value
        })
    }
    selectOption = ()=>{
        this.setState({
            selected: true
        })
        this.props.getInputType(this.state.optionType,this.props.inputId)
    }
    editOption = ()=>{
        this.setState({
            selected: false
        })
    }
    render(){
        let inputType = null
        if(this.state.selected){
            switch(this.state.optionType){
                case 'text-area':
                    inputType = <textarea placeholder={this.state.optionType}/>
                    break;
                case 'checkbox':
                    inputType = <CheckBox howMany={3}/>
                    break;
                default:
                    inputType = <input type={this.state.optionType} placeholder={this.state.optionType}/>
            }
        }
        let style = this.state.selected?'none':'block'
        return(
            <div className={classes.inputType}>
                <div className={classes.selection} style={{display:style}}>
                    <label className={classes.labelStyle}>select input:</label>
                    <select onChange={(event)=>this.getOption(event)} className={classes.selectCss}>
                        <option value="text">Text Input</option>
                        <option value="text-area">Text Area</option>
                        <option value="date">Date Input</option>
                        <option value="phone">phone Number</option>
                        {/* <option value="checkbox">checkbox Option</option> */}
                    </select>
                </div>
                <div className={classes.selectedInput} style={{display:this.state.selected?'block':'none'}}>
                {inputType}
                </div>
                {this.state.selected?<button className={classes.ok} onClick={this.editOption}> EDIT</button>:<button className={classes.ok} onClick={this.selectOption}>OK</button>}
            </div>
        )
    }
}
const mapsActionToProps = (dispatch)=>{
    return{
        getInputType:(type,id)=>dispatch({
            type:'GET_INPUT_TYPE',
            inputType:type,
            id
        })
    }
}

export default connect(null,mapsActionToProps)(InputType)