
import './styles.css'

const APP_HEADER = {
    IMG_PATH: 'https://s3.amazonaws.com/Snowcovered_C_Images/27342_booking.png',
    ALT_MSG:  'booking logo'
}

const AppHeader = (props) => {
    return (
        <div className={'app-header'}> 
            <span>
                <img src={APP_HEADER.IMG_PATH} alt={APP_HEADER.ALT_MSG} className={'app-header-img'}/>
            </span>
            <span className={'app-header-text'}> Booking System </span>
        </div>
    )
}

export default AppHeader

