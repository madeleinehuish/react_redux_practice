import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import store from '../store';

import { trucksButtonFunction } from '../actions/index';

class Trucks extends Component {
	constructor(props){
		super(props);

		this.handleTruckButton = this.handleTruckButton.bind(this);
	}

 	handleTruckButton = () => {

		store.dispatch(trucksButtonFunction());
		// console.log('this.props: ', this.props);
	}

	render() {
		console.log('store.getState(): ', store.getState());
		return(
			<div>
				<div className="container">
					<div className="col col1"></div>
					<div className="col col2"> </div>
					<div className="col col3"> </div>
				</div>
				<br />
				<div className="truck-container">
					<h3>Push button to get list of current food trucks open in San Francisco</h3>
					<button id="truckButton" onClick={this.handleTruckButton}>Get Trucks</button>
					{console.log('trucks: ', this.props.trucks)}
					<div id="truckDiv">
						{this.props.trucks.length ?
								this.props.trucks.map(elem => {
									return <div key={elem.locationid}>
														<p>{elem.applicant}</p>
														<p>{elem.location}</p>
														<br/>
												 </div>
								})
							 : <div></div>
						}
					</div>

				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	// console.log('state: ' ,state);
	return state;
}

function mapDispatchToProps(dispatch) {
	console.log('dispatch: ', dispatch);
	return bindActionCreators({ trucksButtonFunction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Trucks);
