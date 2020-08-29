import React, { Component } from 'react';
import classes from './main.module.css';
import Row from '../row/row'
import {Link} from 'react-router-dom'
class Main extends Component {
  state = {
    rows:[]
  }

  componentDidMount (){
      console.log(this.props)
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
      return <Row next= {this.displayNextRow} key={index} del={()=>this.del(index)} labelId={index+1} inputId={index+1}/>
    })
    return(
      <div className={classes.Main}>
        <div className={classes.row} >
          <Row next={this.displayNextRow} labelId={0} inputId={0}/>
          {newrows}
        </div>
        <Link to='/form'>
            <div className={classes.btn}>
                <span className={classes.txt}>Create Form</span>
                <span className={classes.round}><i className="fa fa-chevron-right"></i></span>
            </div>
        </Link>
        
      </div>
    )
  }
}

export default Main;