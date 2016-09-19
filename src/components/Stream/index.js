// Stream index file
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Stream from './presenter';

// destructuring assignment: 
// 	`{ user } = state.auth;` roughly equates to: `const user = state.auth.user`
// maps state to the `presenter` component
function mapStateToProps(state) {
	const { user } = state.auth;
	const { tracks, activeTrack } = state.track;
	return {
		user,
		tracks,
		activeTrack
	}
}

// allows app to pass actions to the `presenter` component
function mapDispatchToProps(dispatch) {
	return {
		onPlay: bindActionCreators(actions.playTrack, dispatch),
		onAuth: bindActionCreators(actions.auth, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Stream);