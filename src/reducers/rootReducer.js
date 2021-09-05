import { combineReducers } from 'redux';

import roomReducer from './roomReducer'
import bookingReducer from './bookingReducer'

export default combineReducers({
    roomReducer,
    bookingReducer,
});
