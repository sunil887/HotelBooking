import { INIT_BOOKINGS, REGISTER_BOOKING_START, REGISTER_BOOKING_SUCCESS, REGISTER_BOOKING_ERROR } from '../constants/actionTypes'


const initState = {
    bookingMap: {},
    isBookingInProgress: false,
    bookingErr: null
}

const bookingReducer = (state = initState, action) => {
    switch(action.type) {
        case INIT_BOOKINGS :  
            return initState
        case REGISTER_BOOKING_START:
            return { ...state, isBookingInProgress: true }
        case REGISTER_BOOKING_SUCCESS:
            const { allBookings } = action
            return {
                ...state,
                bookingMap: { ...allBookings },
                isBookingInProgress: false,
                bookingErr: null
            }
        case REGISTER_BOOKING_ERROR:
                return { ...state, isBookingInProgress: false, bookingErr: action.err }
        default: return state;
    }
}

export default bookingReducer
