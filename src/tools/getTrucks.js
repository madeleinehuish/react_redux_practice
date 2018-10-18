//Awesome Food Truck App!!!!
import axios from 'axios';
import _ from 'lodash';
import { day, hour, timeCurrent, dayCurrent } from './time';

//main function fetchTrucks: calling api with async/await syntax with query to output data within requested range
const fetchTrucks = async () => {
	//trucksButtonFunction related
	//Awesome Food Truck App!!!!
	// import axios from 'axios';
	// import _ from 'lodash';
	// import { day, hour, timeCurrent, dayCurrent } from './time';

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

	const response = await axios.get(query);
	const truckArray = await response.data;

	//filter by current time
	const truckFiltered = filtered(truckArray);

	//sort list alphabetically with Lodash
	const alphabetical = _.sortBy(truckFiltered, ['applicant']);

	return alphabetical;
}

// const trucks = fetchTrucks(query);

export default fetchTrucks;

// export default { test: 'test'}
