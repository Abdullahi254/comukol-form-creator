import React, { Component } from 'react';
import './App.css';
import Row from '../row/row'

class App extends Component {
  state = {
    rows:[]
  }
  displayNextRow = ()=>{
    let rows  = [...this.state.rows]
    rows.push(0)
   this.setState({
     rows
   })
  }

 del = (i)=>{
  console.log(i)
  let rows  = [...this.state.rows]
  rows.splice(i,1)
  this.setState({
    rows
  })
 }
  render(){
    let rows = [...this.state.rows]
    let newrows = rows.map((i,index)=>{
      return <Row next= {this.displayNextRow} key={index} del={()=>this.del(index)}/>
    })
    return(
      <div className="App">
        <div className="row">
          <Row next={this.displayNextRow}/>
          {newrows}
        </div>
      </div>
    )
  }
}

export default App;
