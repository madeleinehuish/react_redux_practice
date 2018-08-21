import React, { Component } from "react";
import "../styles/app.css";
import Home from '../components/Home';
import { BrowserRouter, Route } from 'react-router-dom';
import redux from 'redux';

const Test1 = () => (
  <div>
    This is Test 1!!!!!!
  </div>
);


export default class App extends Component {
  constructor({ currentState }) {
    super();
    //this is the current state object
    console.log('<App /> props: ', currentState );
  }

  render() {
    return (
        <BrowserRouter>
    			<div>
    				<Route path="/" exact component={Home} />
            <Route path="/test1" component={Test1} />

    			</div>
    		</BrowserRouter>
    );
  }
}
