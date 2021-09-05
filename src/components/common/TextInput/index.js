import React  from 'react'
import PropTypes from 'prop-types'

const TextInput = (props) => {

    const { value, type, onTextChange, placeholder, onClickHandler } = props

    const onChange = (e) => {
        const val = e?.target?.value || ''
        onTextChange(val)
    }

    return <input value={value} onChange={onChange} type={type} placeholder={placeholder} onClick={onClickHandler} onFocus={onClickHandler}/>;
}

TextInput.propTypes = {
    type: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onTextChange: PropTypes.func,
    onClickHandler: PropTypes.func
}

TextInput.defaultProps = {
    type: 'text',
    value: '',
    placeholder: '',
    onTextChange: () => {},
    onClickHandler: () => {}
}

export default TextInput