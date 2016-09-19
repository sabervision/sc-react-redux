import * as actionTypes from '../constants/actionTypes';

const initialState = {
	tracks: [],
	activeTrack: null
};

// Export anonymous reducer function that interprets actionTypes
// ES6 allows declarations of a default param for function input
// , hence the declaration of state as the empty array `initialState`
export default function(state = initialState, action) {
	switch (action.type) {
		case actionTypes.TRACKS_SET:
			return setTracks(state, action);
		case actionTypes.TRACK_PLAY:
			return setPlay(state, action);
	}
	return state;
}

function setTracks(state, action) {
	const { tracks } = action;
	return { ...state, ...tracks };
}

function setPlay(state, action) {
	const { track } = action;
	return { ...state, activeTrack: track };
}