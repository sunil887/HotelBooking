import React from 'react'
import { connect } from 'react-redux'

import CheckBooking from '../../components/CheckBooking'
import { initRooms,fetchRooms, checkRoomAvailability } from '../../actions'
import { selectRooms, selectIsRoomsFetching, selectIsRoomAvailableOnSelectedDate } from '../../reducers/selectors/roomSelectors'


const CheckBookingContainer = (props) => {
    const { rooms, fetchRooms,initRooms, checkRoomAvailability, isRoomAvailableOnSelectedDate, isRoomsFetching } = props
    const checkBookingProps = { rooms, initRooms, fetchRooms, checkRoomAvailability, isRoomAvailableOnSelectedDate, isRoomsFetching }

    return <CheckBooking {...checkBookingProps} />
}

const mapStateToProps = (state) => {
    return {
        rooms: selectRooms(state),
        isRoomsFetching: selectIsRoomsFetching(state),
        isRoomAvailableOnSelectedDate: selectIsRoomAvailableOnSelectedDate(state)
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        fetchRooms: () => dispatch(fetchRooms()),
        initRooms:() => dispatch(initRooms()),
        checkRoomAvailability: (payload) => dispatch(checkRoomAvailability(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckBookingContainer)