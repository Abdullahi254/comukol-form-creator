import React, { Component } from 'react';
import './App.css';
import Main from '../main/main'
import {Route, Switch} from 'react-router-dom'
import Form from '../form/form'

class App extends Component {

  render(){
  
    return(
      <div className="App">
        <Switch>
          <Route path ='/form' component={Form}/>
          <Route path='/' component={Main}/>
        </Switch>
      </div>
    )
  }
}

export default App;
