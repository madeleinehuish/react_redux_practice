import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import Trucks from './Trucks';

import { searchBarFunction } from '../actions/index';

const ulstyle = {
	padding:0
}

const Nav = function(props) {

	const searchBar = (event) => {
		console.log('input for searchBar: ', event.target.value);
		props.searchBarFunction(event.target.value);

	}

	return (
		<nav>
			<div className="left-nav-container">

					<div>
						Madeleine's React/Redux Full Stack Website
						<ul>
							<li><Link to="/">home</Link></li>
							<li><Link to="/trucks">trucks</Link></li>
							{/* <li><a href="pokemon.html">pokemon</a></li> */}
						</ul>
					</div>
			</div>
			<div className="right-nav-container">
				<form>
					<label htmlFor="testInputBox">search</label>
					<input type="search" className="searchInput" id="testInputBox" name="search" onInput={searchBar}/>
				</form>
			</div>
		</nav>
	)
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ searchBarFunction }, dispatch);
}

export default connect(null, mapDispatchToProps)(Nav);
