import {
    INIT_ROOMS,
    FETCH_ROOMS_START,
    FETCH_ROOMS_SUCCESS,
    FETCH_ROOMS_ERROR,
    CHECK_ROOM_AVAILABILITY_START,
    CHECK_ROOM_AVAILABILITY_COMPLETE,
    ERROR_ON_ROOM_AVAILABILITY_CHECK
} from '../constants/actionTypes'


const initState = {
    isRoomsFetching: false,
    rooms: [],
    roomFetchError: null,   
    isRoomAvailableOnSelectedDate: false,
    isRoomAvailabilityCheckInProgress: false,
    errorOnRoomAvailabilityCheck: null
}

const roomReducer = (state = initState, action) => {
    switch(action.type) {
        case INIT_ROOMS : 
        return initState ;
        case FETCH_ROOMS_START:
            return { ...state, isRoomsFetching: true }
        case FETCH_ROOMS_SUCCESS:
            return { ...state, rooms: action?.rooms, isRoomsFetching: false, roomFetchError: null, }
        case FETCH_ROOMS_ERROR:
                return { ...state, rooms: [], isRoomsFetching: false, roomFetchError: action.err }
        case CHECK_ROOM_AVAILABILITY_START:
            return { ...state, isCheckingForRoomAvailability: true }
        case CHECK_ROOM_AVAILABILITY_COMPLETE:
            const { isRoomAvailableOnSelectedDate } = action
            return {
                ...state,
                isRoomAvailableOnSelectedDate,
                isRoomAvailabilityCheckInProgress: false,
                errorOnRoomAvailabilityCheck: null
            }
        case ERROR_ON_ROOM_AVAILABILITY_CHECK:
                return { 
                    ...state,
                    isRoomAvailableOnSelectedDate: false,
                    isRoomAvailabilityCheckInProgress: false,
                    errorOnRoomAvailabilityCheck: action.err
                }                
        default: return state;
    }
}

export default roomReducer
