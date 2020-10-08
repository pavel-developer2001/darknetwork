import React from 'react';
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import Register from './pages/Register'
import {useAuth} from './hooks/auth.hook' 
import {useRoutes} from './router'
import {NetworkContextProvider} from './context/NetworkContext'
import file from './isAuthenticated.json'


import './App.css'

function App() {

  // console.log(file.isAuthenticated)
  // file.isAuthenticated = true
  // console.log(file.isAuthenticated)
  // const router = useRoutes(file.isAuthenticated)
 
  return (

    
   <div className="App">
     <NetworkContextProvider >
       
      <Router>
      <Navbar />

      <Route path="/" component={Home} exact/>
      <Route path="/:id" render={({match}) => {
        const {id} = match.params
        return <Home userId={id}/> }} />
      <Route path="/auth" component={Auth} exact/>
      <Route path="/register" component={Register} exact/>

      {/* {router} */}
      </Router>
     
     </NetworkContextProvider>
    </div>  
   
   
  )
}

export default App
