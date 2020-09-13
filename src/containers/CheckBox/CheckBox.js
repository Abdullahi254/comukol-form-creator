import React,{Component} from 'react'
import classes from './CheckBox.module.css'
import {connect} from 'react-redux'

class CheckBox extends Component{
    state = {
        options:null,
        selected: false,
        inputsNo: 2,
        input:[true,true,true,true,true],
        inputs:[' ',' ',' ',' ',' '],
    }
    toInputs = ()=>{
        this.setState({
            selected:true,
        })
    }
    getInputs = (event)=>{
        console.log(event.target.value)
        this.setState({
            inputsNo:event.target.value
        })
    }
    editSelections = ()=>{
        this.setState({
            selected:false,
        })
    }

    getLabel = (event,index)=>{
       console.log(index)
       let inputs = [...this.state.inputs]
       inputs.splice(index,1,event.target.value)
       this.setState({
           inputs
       })
    }

    trigerLabel = (index)=>{
        let input = [...this.state.input]
        input.splice(index,1,false)
        this.setState({
            input
        })
        console.log(index)
        this.props.getLabel(this.state.inputs[index], this.props.id, index)
    }

    trigerInput = (index)=>{
        let input = [...this.state.input]
        input.splice(index,1,true)
        this.setState({
            input
        })
    }

    render(){   
        let style = this.state.selected?'none':'block'
        let inputs = []
        for(let i=0; i<this.state.inputsNo;i++){
            inputs.push(
                <div key={i} style={{display:'flex'}}>
                    {
                        this.state.input[i]?<input onChange={(event)=>this.getLabel(event,i)}/>:<label className={classes.labelName}>{this.state.inputs[i]}</label>
                    }
                    {
                        this.state.input[i]?
                        <button style={{height:'30px', marginTop:'12px'}} onClick={()=>this.trigerLabel(i)}>ok</button>:
                        <button style={{height:'20px', marginTop:'12px'}} onClick={()=>this.trigerInput(i)}>edit</button>
                    }
                    <input type='checkbox' style={{ marginTop:'16px', height:'25px' }}/> 
                </div>
            )
        }          
        return(
            <div className={classes.container}>
                <div style={{display:style}}>
                    <p>HOW MANY CHECKBOX</p>
                    <select className={classes.selectCss} onChange={(event)=>this.getInputs(event)}>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                </div>
                <div style={{display:this.state.selected?'block':'none'}}> 
                    {inputs}   
                </div>
                <div>
                    {!this.state.selected?<button className={classes.select} onClick={this.toInputs}>Select</button>:<button onClick={this.editSelections} className={classes.select}>Edit</button>}
                </div>
            </div>
        )
    }
}

const mapsActionToProps = (dispatch)=>{
    return{
        getLabel: (labelName,id,instanceId)=>dispatch({
            type:"GET_CHECKBOX_LABEL",
            labelName,
            id,
            instanceId
        }),
    }
}

export default connect(null,mapsActionToProps)(CheckBox)