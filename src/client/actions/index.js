export const INCREASE_COUNT = 'INCREASE_COUNT';
export const DECREASE_COUNT = 'DECREASE_COUNT';
export const SEARCH_BAR = 'SEARCH_BAR';
export const TABLE_INPUT = 'TABLE_INPUT';

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
