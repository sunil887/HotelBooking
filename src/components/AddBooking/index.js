import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import TextInput from '../../components/common/TextInput'
import CustomSelect from '../../components/common/CustomSelect'
import CustomDatePicker from '../common/CustomDatePicker'
import './styles.css'

const AddBooking = (props) => {
   
    const { availableRooms, fetchRooms, initBooking, registerBooking, roomFetchError, isRoomsFetching  } = props
    const [name, setName] = useState('')
    const [room, setRoom] = useState(null)
    const [bookingStartTimeStamp, setBookingStartTimeStamp] = useState(null)
    const [bookingEndTimeStamp, setBookingEndTimeStamp] = useState(null)


    const onSurnameChange = (val) => {
       console.log(val)
       // name = val
       setName(val)
    }

    const onRoomSelect = (selectedRoom) => {
        console.log(selectedRoom, 'selectedRoom')
        // room = selectedRoom
        setRoom(selectedRoom)
    }

    const onRegisterDateRange = (dateRange) => {
        if (dateRange?.length > 0) {
            setBookingStartTimeStamp(new Date(dateRange?.[0])?.getTime())
            setBookingEndTimeStamp(new Date(dateRange?.[1])?.getTime())
        }
    }

    const areBookingFieldsValid = () => {
        let isValid = false, errorMsg = ''
        if(!name?.trim().length) {
            errorMsg = 'Please Enter Surname!'
        } else if(!room) {
            errorMsg = 'Please select one Room !'
        }  else if(!(bookingEndTimeStamp  && bookingEndTimeStamp)){
            errorMsg = 'Please Select the date Range!'
        } else {
            isValid = true
        }

        !isValid && alert(errorMsg)
        return isValid
    }
    
    const resetFormFields = () => {
        setRoom(null)
        setName('')
        setBookingStartTimeStamp(null)
        setBookingEndTimeStamp(null)
    }

    const addBooking = () => {
        if (areBookingFieldsValid()) {
            registerBooking({ name, room, bookingStartTimeStamp, bookingEndTimeStamp })
            if (!roomFetchError) {
                resetFormFields()
                alert('Room booking complete')
            } else {
                alert('Some error Occurred, Please retry!')
            }
            
        }
        
    }

    const getDatePickerValue = () => {
        if (bookingStartTimeStamp && bookingEndTimeStamp) {
            return [new Date(bookingStartTimeStamp), new Date(bookingEndTimeStamp)]
        } else {
            return new Date()
        }
    }

    useEffect(() => {
        fetchRooms();
        initBooking();
    }, [])

    return (
        <div className={'hotel-form'}>
            <div className={'hotel-form-title'}> Add Booking </div>
            <div className={'hotel-form-row'}>
                <span className={'hotel-form-label'}> Surname </span>
                <span className={'form-text'}> <TextInput value = {name} onTextChange={onSurnameChange} placeholder={'Surname'} /> </span>
            </div>
            <div className={'hotel-form-row'}>
                <span className={'hotel-form-label'}> Room </span>
                <span><CustomSelect isLoading={isRoomsFetching} options={availableRooms} selectedOption={room} errorMsg={'No rooms available'} onSelectOption={onRoomSelect}/></span>
            </div>
            <div className={'hotel-form-row'}>
                <span className={'hotel-form-label'}> Date </span>
                <span> <CustomDatePicker value={getDatePickerValue()} onOk={onRegisterDateRange} isDateRange /> </span>
            </div>
            <div className={'add-booking form-button-wrapper'}>
                <button className={'form-button'} onClick={addBooking}> Add </button>
            </div>
        </div>
   )
}

AddBooking.propTypes = {
    availableRooms: PropTypes.array.isRequired,
    fetchRooms: PropTypes.func.isRequired,
    registerBooking: PropTypes.func.isRequired,
}

export default AddBooking