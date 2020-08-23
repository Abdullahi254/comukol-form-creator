import React, { Component } from 'react';
import classes from  './FieldName.module.css';

class FieldName extends Component {
  state = {
    fieldName: null,
    input:true
  }
  getInputName= (event)=>{
    this.setState({
      fieldName:event.target.value
    })
  }
  changeElement = ()=>{
    this.setState({
      input:!this.state.input
    })
  }
  render(){
    let name = this.state.input?<input onChange={(event)=>this.getInputName(event)}/>:<label>
      {this.state.fieldName}
    </label>
    return (
      <div className={classes.theInput}>
        {this.state.input?<label className={classes.label}>Field Name:</label>:''}
        <div className={classes.field}>
         {name}
        </div>
        <button onClick={this.changeElement} className={classes.ok}>{this.state.input?'ok':'edit'}</button>
      </div>
    );
  }  
}

export default FieldName;