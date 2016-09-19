import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from './auth';
import track from './track';

// If `combineReducers` was not used, accessing state of
// 	global tracks would be: `state.tracks` instead of just `track`
// This helper function allows multiple reducers, wherein each reducer
//  only returns a substate
export default combineReducers({
	auth,
	track,
	routing: routerReducer
});