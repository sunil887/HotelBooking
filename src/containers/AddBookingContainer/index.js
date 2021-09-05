import React from 'react'
import { connect } from 'react-redux'

import AddBooking from '../../components/AddBooking'
import { fetchRooms, registerBooking ,initBooking } from '../../actions'
import { selectAvailableRooms, selectIsRoomsFetching ,selectRoomFetchError} from '../../reducers/selectors/roomSelectors'


const AddBookingContainer = (props) => {
    const { availableRooms, initBooking, fetchRooms, registerBooking ,roomFetchError } = props
    const addBookingProps = { initBooking, availableRooms, fetchRooms, registerBooking ,roomFetchError  }
    
    return <AddBooking {...addBookingProps} />
}

const mapStateToProps = (state) => {
    return {
        availableRooms: selectAvailableRooms(state),
        isRoomsFetching: selectIsRoomsFetching(state),
        roomFetchError: selectRoomFetchError(state)
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        fetchRooms: () => dispatch(fetchRooms()),
        initBooking : () => dispatch(initBooking()),
        registerBooking: (payload) => dispatch(registerBooking(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBookingContainer)