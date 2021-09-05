import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import CustomSelect from '../../components/common/CustomSelect'
import CustomDatePicker from '../common/CustomDatePicker'


const CheckBooking = (props) => {
   
    const { rooms, initRooms,fetchRooms, checkRoomAvailability, isRoomAvailableOnSelectedDate, isRoomsFetching  } = props
    const [selectedRoom, setSelectedRoom] = useState(null)
    const [bookingTimeStamp, setSelectedBookingTimeStamp] = useState(null)
    const [clearCheckIcon, setClearCheckIcon] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    

    const onRoomSelect = (room) => {
        setClearCheckIcon(true)
        setSelectedRoom(room)
        setErrorMsg('')
    }

    const onSelectDate = (selectedDate) => {
        setClearCheckIcon(true)
        setSelectedBookingTimeStamp(new Date(selectedDate).getTime())
        setErrorMsg('')
    }

    const areFormFieldsValid = () => {
        let isValid = false

        if( !bookingTimeStamp ) { 
            alert('Please select a date'); 
        } else if(!selectedRoom){
            alert('Please select a room'); 
        } else {
            isValid = true
        }

        return isValid
    }

    const resetFormFields = () => {
        setSelectedRoom(null)
        setSelectedBookingTimeStamp(null)
    }

    const validateRoomAvailability = (e) => {
        setClearCheckIcon(false)
        if (areFormFieldsValid()) {
            checkRoomAvailability({ room: selectedRoom, bookingTimeStamp })
            resetFormFields()
        }
    }

    const getCustomDateValue = () => {
        if (bookingTimeStamp) {
            return new Date(bookingTimeStamp)
        }
        return null
    }

    const shouldShowCheckIcon = () => {
        return isRoomAvailableOnSelectedDate && !clearCheckIcon
    }

    useEffect(() => {
        initRooms();
        fetchRooms();
    }, [])

    return (
        <div className={'hotel-form'}>
            <div className={'hotel-form-title'}> Check Room </div>
            <div className={'hotel-form-row'}>
                <span className={'hotel-form-label'}> Room </span>
                <span><CustomSelect isLoading={isRoomsFetching} selectedOption={selectedRoom} options={rooms} errorMsg={'No rooms available'} onSelectOption={onRoomSelect}/></span>
            </div>
            <div className={'hotel-form-row'}>
                <span className={'hotel-form-label'}> Date </span>
                <span> <CustomDatePicker value={getCustomDateValue()} onOk={onSelectDate} is/> </span>
            </div>
            {errorMsg && <div> {errorMsg} </div>}
            <div className={'add-booking form-button-wrapper'}>
                <button className={'form-button'} style={{ 'margin-right': '0px' }} onClick={validateRoomAvailability}> Check </button>
                {shouldShowCheckIcon() && (<span style={{ 'margin-left': '10px', alignSelf: 'center' }}>
                    <i class="material-icons"> done_outline</i>
                </span>)}
            </div>
        </div>
   )
}

CheckBooking.propTypes = {
    rooms: PropTypes.array.isRequired,
    fetchRooms: PropTypes.func.isRequired,
    isRoomsFetching: PropTypes.bool.isRequired,
    isRoomAvailableOnSelectedDate: PropTypes.bool.isRequired,
    checkRoomAvailability: PropTypes.func.isRequired,
}

export default CheckBooking
