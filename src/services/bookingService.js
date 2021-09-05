import ROOMS from '../constants/mockAPIData/rooms'

const fetchRoomsService = () => {
    return Promise.resolve(ROOMS)
}

const registerBookingService =  (payload) => {
    const { bookingStartTimeStamp, bookingEndTimeStamp, name, room } = payload

    return new Promise(() => {
        const bookingMap = JSON.parse(sessionStorage.getItem('bookingMap')) || {}
        const bookingKey = `${bookingStartTimeStamp}_${bookingEndTimeStamp}_${room.value}`
        bookingMap[bookingKey] = {
            name,
            dateRange: { start: bookingStartTimeStamp, end: bookingEndTimeStamp },
            room
        }
        sessionStorage.setItem('bookingMap', JSON.stringify(bookingMap))
        return bookingMap
    })
}

const roomAvailabilityService = ({bookingTimeStamp, room}) => {
    
    const bookingMap = JSON.parse(sessionStorage.getItem('bookingMap'))
    
    const out = Object.values(bookingMap).some(booking => {
        const { start, end } = booking.dateRange
        let extendedEndDate = new Date(end);
        extendedEndDate.setDate(extendedEndDate.getDate()+1);
        return (bookingTimeStamp >= start && bookingTimeStamp  <= extendedEndDate?.getTime() && booking?.room?.value === room?.value)
    })

    return Promise.resolve(out)
}


export {
    fetchRoomsService,
    registerBookingService,
    roomAvailabilityService
}




