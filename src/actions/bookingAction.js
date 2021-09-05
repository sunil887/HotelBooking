import { FETCH_ROOMS_START, FETCH_ROOMS_SUCCESS, FETCH_ROOMS_ERROR, CHECK_ROOM_AVAILABILITY_START,
    CHECK_ROOM_AVAILABILITY_COMPLETE, ERROR_ON_ROOM_AVAILABILITY_CHECK,INIT_BOOKINGS } from "../constants/actionTypes"
import { registerBookingService, roomAvailabilityService } from '../services/bookingService'


export const registerBooking = (payload) => {
    return (dispatch) => {
        dispatch(registerBookingStart())
        registerBookingService(payload)
            .then(allBookings => {
                dispatch(registerBookingSuccess(allBookings))
                
            })
            .catch(err => dispatch(registerBookingError(err)))
    }
}


const registerBookingStart = () => ({ type: FETCH_ROOMS_START })

const registerBookingSuccess = (allBookings) => {
    return { 
        type: FETCH_ROOMS_SUCCESS,
        allBookings
    }
}

const registerBookingError = (err) => {
    return { 
        type: FETCH_ROOMS_ERROR,
        err
    }
}


export const checkRoomAvailability = (payload) => {
    return (dispatch) => {
        dispatch(checkRoomAvailabilityStart())
        roomAvailabilityService(payload)
            .then(isRoomAvailableOnSelectedDate => dispatch(checkRoomAvailabilityComplete(isRoomAvailableOnSelectedDate)))
            .catch(err => dispatch(errorOnCheckingRoomAvailability(err)))
    }
}

export const initBooking = ()=>{
    return {
        type : INIT_BOOKINGS
    }
}

const checkRoomAvailabilityStart = () => ({ type: CHECK_ROOM_AVAILABILITY_START })


const checkRoomAvailabilityComplete = (isRoomAvailableOnSelectedDate) => ({ 
    type:  CHECK_ROOM_AVAILABILITY_COMPLETE,
    isRoomAvailableOnSelectedDate
})

const errorOnCheckingRoomAvailability = (err) => ({ 
    type:  ERROR_ON_ROOM_AVAILABILITY_CHECK,
    err
})