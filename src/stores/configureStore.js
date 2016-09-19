import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers/index';

// logger middleware shows us console output for each action: 
// 	the previousState, the action itself and the nextState
// allows us to keep track of state changes in application 
const logger = createLogger();

// browserHistory middleware is synced with the store allowing the app
// to listen on evets based on app's current route
const router = routerMiddleware(browserHistory);

const createStoreWithMiddleware = applyMiddleware(thunk, router, logger)(createStore);

export default function configureStore(initialState) {
	return createStoreWithMiddleware(rootReducer, initialState);
}