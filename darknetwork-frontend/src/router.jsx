import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Auth from './pages/Auth'
import Register from './pages/Register'
import Home from './pages/Home'


export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/user" exact>
          <Home />
        </Route>
        
        <Redirect to="/user" />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path="/register" exact>
        <Register />
      </Route>
      <Route path="/auth" exact>
        <Auth />
      </Route>
      <Redirect to="/auth" />
      
    </Switch>
  )
}
