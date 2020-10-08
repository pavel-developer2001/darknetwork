import React from 'react'
import '../index'
import {Link, Redirect} from 'react-router-dom'
import NetworkApi from '../apis/NetworkApi'
import {NetworkContext} from '../context/NetworkContext'


const Auth = (props) => {
    const {addUser} = React.useContext(NetworkContext)
    const [name, setName] = React.useState('')
    const [redirect, setRedirect] = React.useState(false)
    const [password, setPassword] = React.useState('')
  const addFormUser = async (e) => {
    e.preventDefault();
 
    try{
      const response = await NetworkApi.post(`/login`, {name, password})
       
      const postInfo = response.data.data
      console.log(postInfo)
      addUser(postInfo)
      setRedirect(true)
      if(redirect){
        
        return(<Redirect to="/:id" />)
      }
      setName('')
      setPassword('')
     

    
    }catch(err){
      console.log(err)
    }
  }
    return (
        <div className='auth'>
            <form сlassName="auth-form"  onSubmit={addFormUser}>
            <label className="auth-label">Логин</label>
            <input 
            className="auth-input"
            placeholder='login'
            name='name'
            value={name}
            onChange={(e)=> setName(e.target.value)} />
            <label className="auth-label">Пароль</label>
            <input
            className="auth-input"
            placeholder='password'
            name='password'
            value={password}
            onChange={(e)=> setPassword(e.target.value)}  />
            <button className='auth-btn' type='submit' onClick={addFormUser}>Войти</button>
            </form>
            <p>Если вы ещё не зарегистрированны переходите на страницу регистрации </p>
            <Link to='/register'>Регистрация</Link>
        </div>
    )
}
export default Auth