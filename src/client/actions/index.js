import axios from 'axios';
import _ from 'lodash';
import store from '../store';
// import { day, hour, timeCurrent, dayCurrent } from '../../tools/time';

export const INCREASE_COUNT = 'INCREASE_COUNT';
export const DECREASE_COUNT = 'DECREASE_COUNT';
export const SEARCH_BAR = 'SEARCH_BAR';
export const TABLE_INPUT = 'TABLE_INPUT';
export const TRUCKS_BUTTON = 'TRUCKS_BUTTON';
export const RECEIVE_TRUCKS = 'RECEIVE_TRUCKS';
export const POKE_BUTTON = 'POKE_BUTTON';
export const RECEIVE_POKEMON = 'RECEIVE_POKEMON';

export function countButtonFunction(sign) {
	if(sign==='+') {
		return {
			type: INCREASE_COUNT,
			payload: 1
		}
	} else if (sign==='-') {
		return {
			type: DECREASE_COUNT,
			payload: 1
		}
	}
}

export function searchBarFunction(input) {

	return {
		type: SEARCH_BAR,
		payload: input
	}
}

export function tableInputFunction(input) {
	return {
		type: TABLE_INPUT,
		payload: input
	}
}

export function updateTrucks(trucks) {
	return {
		type: RECEIVE_TRUCKS,
		payload: trucks
	}
}

export function updatePokemon(pokemon) {
	return {
		type: RECEIVE_POKEMON,
		payload: pokemon
	}
}

export function trucksButtonFunction() {

		return {
			type: TRUCKS_BUTTON,
			payload: function(dispatch, getState) {
				const date = new Date();
				const day = date.getDay();
				const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
				const hour = date.getHours();
				let minutes = date.getMinutes();
				if (minutes < 10) {
				  minutes = '0' + minutes;
				}
				let hour12 = hour;
				let twelve;
				if(hour>12) {
				  hour12 = hour - 12;
				  twelve = 'PM'
				} else if (hour===12){
				  twelve = 'PM';
				} else twelve = 'AM';
				const timeCurrent = hour12 + ':' + minutes + twelve;
				const dayCurrent = days[day];


				const baseUrl = 'https://data.sfgov.org/resource/bbb8-hzi6.json';
				const query = `${baseUrl}?dayorder=${day}`;
				//////////

				//filter function for determining values between start and end time
				const filtered = arr => {
					const filterThis = arr.filter(elem => {
						const start24 = Number(elem.start24.substr(0,2));
						const end24 = Number(elem.end24.substr(0,2));

						return start24 <= hour && hour < end24;
					})
					return filterThis;
				}

				return fetch(query)
											.then(data => {
												return data.json()
											})
											.then(data => {
												// console.log('res: ', data);
												const truckArray = data;
												const truckFiltered = filtered(truckArray);
												const alphabetical = _.sortBy(truckFiltered, ['applicant']);
												// console.log('alphabetical: ', alphabetical);
												store.dispatch(updateTrucks(alphabetical));
											})
			}()
		 }
}

export function pokeButtonFunction() {
	console.log('poke button pushed, awaiting response...');
	return {
		type: POKE_BUTTON,
		payload: function(dispatch, getState) {
								return axios('https://pokeapi.co/api/v2/pokemon?limit=90')
													.then(res => {
														console.log('res: ', res);
														let data = res;
														return data;
													})
													.then(jsonData => {
														console.log('poke data: ', jsonData)
													})
													.catch(err => console.log(err));

		}()
	}
	// console.log('fetch response: ', json);
	// pokeDiv.style.display = 'block';
	// pokeSearch.style.display = 'block';
	// pokeButton.style.display = 'none';
	// buttonMessage.style.display = 'none';
	// defaultPokeData = json.results;
	// buildPokemonList(defaultPokeData);
}
