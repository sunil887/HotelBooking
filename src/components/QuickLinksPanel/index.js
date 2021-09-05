import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'

import './styles.css'

const QuickLinksPanel = (props) => {
    const { items, history } = props
    const [activePath, setActivePath] = useState(history?.location?.pathname)
    console.log(history, activePath, 'history')

    const goToPath = (path) => {
        setActivePath(path)
        history.push(path)
    }

    const getClass = (path) => {
        const baseClass = 'quick-link-panel-item'
        console.log(path === activePath, path, 'XXX')
        return (path === activePath) ?`${baseClass} selected` : baseClass
    }

    return (
            <div className={'quick-link-panel'}>
                {items.map(({ path, text }, idx) => {
                    return (
                        <div key={path} className={getClass(path)} onClick={() => goToPath(path)}> {text} </div>
                    )
                })}
            </div>)
}

export default withRouter(QuickLinksPanel)