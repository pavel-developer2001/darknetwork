import React from 'react'
import { Redirect } from 'react-router-dom'
import NetworkApi from '../apis/NetworkApi'
import {NetworkContext} from '../context/NetworkContext'


const Register = () => {
    const {addUser} = React.useContext(NetworkContext)
    const [name, setName] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [password2, setPassword2] = React.useState('')
    
  const addFormUser = async (e) => {
    e.preventDefault();
 
    try{
      const response = await NetworkApi.post(`/register`, {name, password, password2})
      const postInfo = response.data.data
      console.log(postInfo)
      addUser(postInfo)
      setName('')
      setPassword('')
      setPassword2('')
    
    }catch(err){
      console.log(err)
    }
  }
    return (
        <div className='auth'>
        <form сlassName="auth-form" onSubmit={addFormUser}>
        <label className="auth-label">Имя</label>
        <input 
        className="auth-input"
        placeholder='Введите имя пользователя'
        name='name'
        value={name}
        onChange={(e)=> setName(e.target.value)} />
        <label className="auth-label">Пароль</label>
        <input
        className="auth-input"
        placeholder='Введите пароль'
        name='password'
        value={password}
        onChange={(e)=> setPassword(e.target.value)}  />
        <label className="auth-label">Повторить пароль</label>
        <input 
        className="auth-input" 
        placeholder='Введите пароль ещё раз'
        name='password2'
        value={password2}
        onChange={(e)=> setPassword2(e.target.value)}  />
        <button className='auth-btn' type='submit' onClick={addFormUser}>Зарегистрироваться</button>
        {/* <Redirect to='/home' /> */}
        </form>
    </div>
    )
}
export default Register