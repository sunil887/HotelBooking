import { createSelector } from 'reselect'

const selectRoomReducer = (state) => state?.roomReducer
const selectRooms = (state) => selectRoomReducer(state)?.rooms
const selectIsRoomsFetching = (state) => selectRoomReducer(state)?.isRoomsFetching
const selectRoomFetchError = state => selectRoomReducer(state)?.roomFetchError
const selectIsRoomAvailableOnSelectedDate = (state) => {
    return selectRoomReducer(state)?.isRoomAvailableOnSelectedDate;
}

const selectAvailableRooms = createSelector(
    selectRooms,
    (rooms) => rooms.filter(room => room.isAvailable))

export {
    selectRoomReducer,
    selectRooms,
    selectIsRoomsFetching,
    selectRoomFetchError,
    selectAvailableRooms,
    selectIsRoomAvailableOnSelectedDate,
}

