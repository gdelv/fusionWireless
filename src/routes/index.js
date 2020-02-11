import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Landing from '../screens/Landing'
import Careers from '../screens/Careers'
import CorporateSales from '../screens/CorporateSales'

export const Routes = (props) => {
    return (
        <Switch>
            <Route exact path= '/' component={Landing} />
            <Route exact path= '/careers' component={Careers} />
            <Route exact path= '/corporate-sales' component={CorporateSales} />
        </Switch>
    )
}