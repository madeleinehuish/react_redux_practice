import React, { Component } from "react";
import "../styles/app.css";
import Home from './Home';
import { BrowserRouter, Route } from 'react-router-dom';
import Trucks from './Trucks';
import Pokemon from './Pokemon';

import Nav from './Nav';

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
       <div>
         <BrowserRouter>
     			<div>
            <Nav />
     				<Route path="/" exact component={Home} />
            <Route path="/test1" component={Test1} />
            <Route path="/trucks" component={Trucks} />
            <Route path="/pokemon" component={Pokemon} />

     			</div>
     		</BrowserRouter>
       </div>

    );
  }
}
