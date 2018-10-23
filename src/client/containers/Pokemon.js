import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import store from '../store';

import { pokeButtonFunction } from '../actions/index';

class Pokemon extends Component {
	constructor(props){
		super(props);

		this.handlePokeButton = this.handlePokeButton.bind(this);
	}

 	handlePokeButton = () => {

		store.dispatch(pokeButtonFunction());
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
				<div className="pokemonContainer">
					<h3 id="buttonMessage">Push button to get list of Pokemon!!!!</h3>
			    <div id="pokeSearch">
			      <input id="pokeSearchInput" />
			      <label htmlFor="pokeSearchInput"> Filter by Pokemon</label>
			    </div>
			    <br />
					<button id="pokeButton" onClick={this.handlePokeButton}>Get Pokemon</button>
					<div id="pokemonDiv"></div>
			    <div id="mainViewport">
			      <h2 id="pokeName"></h2>
			      <div id="pokemonViewport1"></div>
			      <div id="pokemonViewport2"></div>
			      <div id="pokemonViewport3"></div>
			      <div id="pokemonViewport4"></div>
			      <div id="pokemonViewport5"></div>
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
	return bindActionCreators({ pokeButtonFunction }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Pokemon);
