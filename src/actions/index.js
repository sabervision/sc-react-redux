import { auth } from './auth';
import { setTracks, playTrack } from './track';

// Bundle all action creators and export as public interface
// Allows the app to access action creators via this interface
//	instead of reaching into individual action creator files

export {
	auth,
	setTracks,
	playTrack
};