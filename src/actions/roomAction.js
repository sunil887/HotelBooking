import { INIT_ROOMS,FETCH_ROOMS_START, FETCH_ROOMS_SUCCESS, FETCH_ROOMS_ERROR } from "../constants/actionTypes"
import { fetchRoomsService } from '../services/bookingService'

export const fetchRooms = () => {
    return (dispatch) => {
        dispatch(fetchRoomsStart())
        fetchRoomsService()
            .then(rooms => dispatch(fetchRoomsSuccess(rooms)))
            .catch(err => dispatch(fetchRoomsError(err)))
    }
}
export const initRooms = () =>{
    return {
        type: INIT_ROOMS
    }
} 

const fetchRoomsStart = () => ({ type: FETCH_ROOMS_START })

const fetchRoomsSuccess = (rooms) => {
    return { 
        type: FETCH_ROOMS_SUCCESS,
        rooms
    }
}

const fetchRoomsError = (err) => {
    return { 
        type: FETCH_ROOMS_ERROR,
        err
    }
}
