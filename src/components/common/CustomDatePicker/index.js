import React from 'react'
import PropTypes from 'prop-types'

import { DateRangePicker as DateRange, DatePicker} from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css'



const CustomDatePicker = (props) => {
  const { onOk, isDateRange, placeholder, value }  = props
  const { beforeToday } = DateRange;

  
  return (
    <>
      {isDateRange &&
        <DateRange  value={value} placeholder={placeholder} disabledDate={beforeToday()}  style={{ width: 250 }} onOk={(a) => onOk(a)} />}
      {!isDateRange &&
        <DatePicker value={value} placeholder={placeholder} disabledDate={beforeToday()} style={{ width: 250 }} onOk={(a) => onOk(a)}/>}
    </>
   )
}

CustomDatePicker.defaultProps = {
  isDateRange: false,
  placeholder: 'Pick a date',
}

CustomDatePicker.propTypes = {
  isDateRange: PropTypes.bool,
  value: PropTypes.array.isRequired,
  onOk: PropTypes.func.isRequired,
}

export default CustomDatePicker