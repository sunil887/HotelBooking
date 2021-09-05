import PropTypes from 'prop-types'

const IMG_URL = 'https://i.gifer.com/ZZ5H.gif'

const Loader = (props) => {
    const { height, width, imgURl, alt, show } = props
    
    if (show) {
      return  <img src={imgURl} height={height} width={width} alt={alt} />
    }
    return null
    
}

Loader.propTypes = {
    show: PropTypes.bool.isRequired,
    height: PropTypes.number,
    width: PropTypes.number,
    imgURl: PropTypes.string,
    alt: PropTypes.string
}

Loader.defaultProps = {
    show: false,
    height: 40,
    width: 40,
    imgURl: IMG_URL,
    alt: 'loader'
}

export default Loader

