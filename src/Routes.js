import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import CheckBookingContainer from './containers/CheckBookingContainer'
import AddBookingContainer from './containers/AddBookingContainer'
import ROUTES from './constants/routes'

const Routes = (props) => {
    return (

        <Router>
            <div className={'left-column'}>
                {props.children}
            </div>    
            <div className={'right-column'}>
                <Switch>
                    <Route exact path={ROUTES.HOME} component={() => `Welcome to booking system. Please add a booking \n or check for past bookings`} />
                    <Route exact path={ROUTES.ADD_BOOKING} component={AddBookingContainer} />
                    <Route path={ROUTES.CHECK_ROOM} component={CheckBookingContainer} />
                </Switch>
            </div>    
        </Router>
    );
}

export default Routes;
    