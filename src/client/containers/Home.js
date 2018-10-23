import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactImage from "../img/react.png";
import "../styles/home.css";

import { countButtonFunction } from '../actions/index';
import { tableInputFunction } from '../actions/index';

class Home extends Component {
	constructor (props) {
		super(props);
		console.log('props home.js: ', props);
		this.countAdd = this.countAdd.bind(this);
		this.countSubtract = this.countSubtract.bind(this);
		this.handleTableElems = this.handleTableElems.bind(this);
		this.handleClearButton = this.handleClearButton.bind(this);
		this.tableInput = this.tableInput.bind(this);
	}

	countAdd () {
		console.log('add button pushed!!!');
		this.props.countButtonFunction('+');
	}

	countSubtract () {
		console.log('subtract button pushed!!!');
		this.props.countButtonFunction('-');
	}

	handleTableElems (event) {
		console.log('event.target: ', event.target);
		document.getElementById('showElem').innerHTML = event.target.innerText;
	}

	handleClearButton () {
		document.getElementById('showElem').innerHTML = '';
	}

	tableInput (event) {
		console.log('input for tableInput: ', event.target.value);
		console.log('event target: ', event.target);
		this.props.tableInputFunction(event.target.value);
	}

	// componentDidMount() //going to need this for when tableInput changes as then we want to save state and check that against
	render () {
		return (
			<div>
				<div className="container">
					<div className="col col1"></div>
					<div className="col col2"> </div>
					<div className="col col3"> </div>
				</div>
				<br />
				<div id="testInput"></div>
				<div className="table-container">
					Click or Hover over Element or type a number from one to fifteen
					<input id="tableInput" onInput={this.tableInput}/>
					<table id="tableId" >
						<thead id="table15">
						</thead>
			      <tbody id="tableBody" onClick={this.handleTableElems}>
			        <tr>
			  				<td className={'te'}>element 1</td>
			  				<td className={'te'}>element 2</td>
			  				<td className={'te'}>element 3</td>
			  				<td className={'te'}>element 4</td>
			  				<td className={'te'}>element 5</td>
			  			</tr>
			  			<tr>
			  				<td className={'te'}>element 6</td>
			  				<td className={'te'}>element 7</td>
			  				<td className={'te'}>element 8</td>
			  				<td className={'te'}>element 9</td>
			  				<td className={'te'}>element 10</td>
			  			</tr>
			  			<tr>
			  				<td className={'te'}>element 11</td>
			  				<td className={'te'}>element 12</td>
			  				<td className={'te'}>element 13</td>
			  				<td className={'te'}>element 14</td>
			  				<td className={'te'}>element 15</td>
			  			</tr>
			      </tbody>
					</table>
					<br />
					<div id="showElem"></div>
					<button id="clearButton" onClick={this.handleClearButton}>Clear</button>
					<br/><br/>
					<button id="testReduxButton" onClick={this.countAdd}>Push to Increase Count</button>
					<button id="testReduxButton2" onClick={this.countSubtract}>Push to Decrease Count</button>
					<p>count: {this.props.count_button.count}</p>
					<p>searchString: {this.props.searchString.searchString}</p>
					<p>tableInputString: {this.props.tableInputString.tableInputString}</p>
				</div>
			</div>
		)
	}

}

function mapStateToProps({ count_button, searchString, tableInputString }) {
	return { count_button, searchString, tableInputString };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ countButtonFunction, tableInputFunction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
