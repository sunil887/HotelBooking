import React, { useEffect, useState, useRef } from 'react'
import './styles.css'

import Loader from '../../common/Loader'


const CustomSelect = (props) => {
    
    const { onSelectOption, errorMsg, selectedOption,  isLoading}  = props
    const [filteredOptions, setFilteredOptions] = useState(props.options)
    // const [selectedOption, setSelectedOption] = useState([props.selectedOption])
    const [isPanelVisible, setPanelVisibility] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    
    const selectOption = (option) => {
        setPanelVisibility(false)
        // setSelectedOption(option)
        onSelectOption(option)
    }

    const getOptionClass = (option) => {
        const baseClass = 'custom-select-option'
        return selectedOption?.value === option.value ? `${baseClass} selected` : baseClass
    }

    const shouldShowOptionsPanel = () => areOptionsAvailable() && isPanelVisible

    const shouldShowErrorPanel = () => !areOptionsAvailable() && isPanelVisible

    const areOptionsAvailable = () => (filteredOptions.length > 0)

    const onChangeSearchTerm = (e) => {
        const searchTerm = e.currentTarget.textContent
        setSearchTerm(searchTerm)
    }

    useEffect(() => {
        const { options } = props
        const filteredOptions = options.filter(option => {
            return (JSON.stringify(option.label).indexOf(searchTerm) > -1)
        })
        setFilteredOptions(filteredOptions)
    }, [searchTerm])


    const componentRef = useRef();

    useEffect(() => {
        document.addEventListener("click", handleClick);
        
        return () => document.removeEventListener("click", handleClick);
        
        function handleClick(e) {
            if(componentRef && componentRef.current){
                const ref = componentRef.current
                if(!ref.contains(e.target)){
                    setPanelVisibility(false)
                }
            }
        }
    }, []);

    useEffect(() => { setFilteredOptions(props.options) }, [props.options])

    return (
        <div className="overlay">
            <div className="custom-select">
                <div className={"custom-select-search-area"} ref={componentRef} onClick={() => setPanelVisibility(true)}>
                    <div  data-text="Select a room" className={'selected-option-content'} contentEditable="true" onInput={onChangeSearchTerm} >
                        {selectedOption?.label}
                    </div>
                    <div className={'custom-select-search-area-arrow'} onClick={() => setPanelVisibility(!isPanelVisible)}>
                        <i className="material-icons">arrow_drop_down</i>
                    </div>
                    <span style={{marginLeft: '20px', alignSelf: 'center' }}>
                        <Loader show={isLoading} height={'20px'} width={'20px'} />
                    </span>    
                </div>
                {shouldShowOptionsPanel() && <div className="custom-select-option-panel">
                    {filteredOptions.map((option, idx) => 
                        <div key={option.value} onClick={() => selectOption(option)} className={getOptionClass(option)}>{option.value}</div>)}
                </div>}
                {shouldShowErrorPanel() && <div className="custom-select-option-panel-error"> {errorMsg} </div>}
            </div>
        </div>
    )
}


CustomSelect.defaultProps = {
    errorMsg: 'No Items available',
    optios: [],
    onSelectOption: () => {}
}

export default CustomSelect
