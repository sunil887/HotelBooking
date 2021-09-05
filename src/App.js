import React from 'react'

// import Layout from './components/Layout'
import QuickLinksPanel from './components/QuickLinksPanel'
import AppHeader from './components/AppHeader'
import { QUICK_LINKS } from './constants'
import Routes from './Routes'

const App = (props) => {
    return (
      <>
      <AppHeader />
      <div className={'appContainer'}>
        <Routes>
            <QuickLinksPanel items={QUICK_LINKS} />  
        </Routes>  
      </div>
    </>  
    );
}

export default App;