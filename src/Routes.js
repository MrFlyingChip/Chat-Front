import React from 'react'

import App from './containers/App'
import NotFound from './components/NotFound'

import {Route, IndexRoute} from 'react-router'
import LoginPage from "./components/LoginPage";
import SighUpPage from "./components/SignUpPage";
import StartPage from "./components/StartPage";
import Home from "./components/Home";
import Users from "./containers/Users";


export const routes =(
    <div>
        <Route path='/' component={App}>
            <IndexRoute component={Home} />
            <Route path={'/login'} component={LoginPage}/>
            <Route path={'/signup'} component={SighUpPage}/>
            <Route path={'/find_friends'} component={Users}/>
        </Route>
        <Route path='*' component={NotFound} />
    </div>
)