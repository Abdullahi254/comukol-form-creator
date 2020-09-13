import React, { Component } from 'react';
import classes from  './FieldName.module.css';
// import {getLabel} from '../../store/actionCreators/formActions'
import {connect} from 'react-redux'

class FieldName extends Component {
  componentDidMount(){
    console.log(this.props)
  }
  state = {
    fieldName: null,
    input:true,
  }
  getInputName= (event)=>{
    this.setState({
      fieldName:event.target.value
    })
  }

  toEdit = ()=>{
    this.setState({
      input:false
    })
   let fieldName = this.state.fieldName
   if(fieldName &&(fieldName !== this.props.labels[this.props.labels.length - 1])){
      this.props.getLabel(fieldName,this.props.labelId)
   }
  }

  toOk = ()=>{
    this.setState({
      input: true
    })
  }

  render(){

    let name = this.state.input?<input onChange={(event)=>this.getInputName(event)} required/>:<label>
      {this.state.fieldName}
    </label>
    return (
      <div className={classes.theInput}>
        {this.state.input?<label className={classes.label}>Field Name:</label>:''}
        <div className={classes.field}>
         {name}
        </div>
        {this.state.input?<button className={classes.ok} onClick={this.toEdit}>OK</button>:<button className={classes.ok} onClick={this.toOk}>EDIT</button>}
      </div>
    );
  }  
}

const mapStateToProps = state=>{
  return{
    labels:state.labels
  }
}
const mapsActionToProps = dispatch=>{
  return{
    getLabel: (label,id)=>{dispatch({
      type:'GET_LABEL',
      label,
      id
  })}
  }
}
export default connect(mapStateToProps,mapsActionToProps)(FieldName);