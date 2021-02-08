import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import LandPage from '../LandPage'
import ShowUsers from '../ShowUsers'

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={LandPage}/>
            <Route exact path="/users" component={ShowUsers}/>
        </Switch>
    </BrowserRouter>
)

export default Router