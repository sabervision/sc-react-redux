import SC from 'soundcloud';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import * as actions from './actions';
import App from './components/App';
import Callback from './components/Callback';
import Stream from './components/Stream';
import { CLIENT_ID, REDIRECT_URI } from './constants/auth';

SC.initialize({ client_id: CLIENT_ID, redirect_uri: REDIRECT_URI});

// const tracks removed to 'fetch' tracks from soundcloud api instead
// import tracks
// const tracks = [
// 	{
// 		title: 'Some track'
// 	},
// 	{
// 		title: 'Some other track'
// 	}
// ];

// singleton Redux object containing application global state object
const store = configureStore();

// old code used with removed `const tracks =[ ...`
//store.dispatch(actions.setTracks(tracks));

const history = syncHistoryWithStore(browserHistory, store);


// Redux store is made available via the `Provider` component and
//  its prop store 
ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={Stream} />
				<Route path="/" component={Stream} />
				<Route path="/callback" component={Callback} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('app')
);

module.hot.accept();

