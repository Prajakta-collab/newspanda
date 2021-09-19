
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News   from './components/News';
import LoadingBar from 'react-top-loading-bar';

import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";


export default class App extends Component {
  pageSize=6;
  APIKey='87282f2d2bc14f2da2ac6b01c6a7c3f6'
  state={
    progress:0
  }

  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {

    return (
      
    <div>
      <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        
        
      />
   <Router>
        <Navbar/>

        
        

        <Switch>
          
        <Route exact path="/"><News setProgress={this.setProgress} APIKey={this.APIKey} key={"general"} pageSize={this.pageSize} country="in" category="general"/></Route>

        <Route exact path="/business"><News setProgress={this.setProgress} APIKey={this.APIKey} key={"business"} pageSize={this.pageSize} country="in" category="business"/></Route>
 
        <Route exact path="/entertainment"><News setProgress={this.setProgress} APIKey={this.APIKey} key={"entertainment"} pageSize={this.pageSize} country="in" category="entertainment"/></Route>

        
        <Route exact path="/health"><News setProgress={this.setProgress} APIKey={this.APIKey} key={"health"} pageSize={this.pageSize} country="in" category="health"/></Route>

        <Route exact path="/sports"><News setProgress={this.setProgress} APIKey={this.APIKey} key={"sports"} pageSize={this.pageSize} country="in" category="sports"/></Route>
        <Route exact path="/science"><News setProgress={this.setProgress} APIKey={this.APIKey} key={"science"} pageSize={this.pageSize} country="in" category="science"/></Route>


        <Route exact path="/technology"><News setProgress={this.setProgress} APIKey={this.APIKey} key={"technology"} pageSize={this.pageSize} country="in" category="technology"/></Route>


        </Switch>
        </Router> 
        
        
        </div>
        
        
    )
  }
}
