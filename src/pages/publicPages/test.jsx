

import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { REGISTER_PAGE } from '../../utils/routes'
import { FaEyeSlash, FaEye } from 'react-icons/fa'
import { notify } from '../../utils/notify'
import axios from 'axios'

const Login = () => {
  const [userLogin, setUserLogin] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [userLoginDirty] = useState(false)
  const [userPasswordDirty] = useState(false)
  const [userLoginError, setUserLoginError] = useState('Enter login')
  const [userPasswordError, setUserPasswordError] = useState('Enter password')
  const [rememberMe, setRememberMe] = useState(false)
  const [eye, setEye] = useState(false)
  const [passwordType, setPasswordType] = useState('password')

  const showPassword = () => {
    setEye(!eye)
    setPasswordType(passwordType === 'password' ? 'text' : 'password')
  }

  const blurHandler = e => {
    switch (e.target.name) {
      case 'userLogin':
        if (!e.target.value) {
          setUserLoginError('Login cannot be empty')
        } else {
          setUserLoginError('')
        }
        break
      case 'userPassword':
        if (!e.target.value) {
          setUserPasswordError('Password cannot be empty')
        } else {
          setUserPasswordError('')
        }
        break
      default:
        break
    }
  }

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('rememberMe'))
    if (savedUser) {
      setUserLogin(savedUser.email)
      setUserPassword(savedUser.password)
    } else {
      setUserLogin('')
      setUserPassword('')
    }
  }, [])

  const getUsers = async () => {
    try {
      const response = await axios.get('http://localhost:4000/users')
      return response.data
    } catch (error) {
      console.log(error.message)
      return []
    }
  }

  const logining = async event => {
    event.preventDefault()

    const users = await getUsers()

    const user = users.find(user => user.email === userLogin)

    if (!user) {
      notify('User does not exist!', 'red')
      return
    }

    if (user.password !== userPassword) {
      notify('Login or password entered incorrectly!', 'red')
      return
    }

    if (!user.isBlocked) {
      notify('User is blocked!', 'red')
      return
    }

    if (rememberMe) {
      localStorage.setItem('rememberMe', JSON.stringify(user))
    }

    localStorage.setItem('Token', user.userName)
    window.location.reload()

    setUserLogin('')
    setUserPassword('')
  }

  const isFormValid = userLogin && userPassword

  return (
    <div className='min-h-[500px] p-[50px] h-[80vh] flex items-center justify-center select-none'>
      <form
        onSubmit={logining}
        className='min-h-[500px] flex flex-col items-center justify-start h-[60vh] bg-sky-900/50 w-[40%] min-w-[400px] gap-5 p-5 rounded-xl'
      >
        <h1 className='text-5xl p-[40px] text-slate-50 font-bold'>LOGIN</h1>

        <span>
          {userLoginDirty && userLoginError && (
            <div className='text-center text-red-500 font-bold'>
              {userLoginError}
            </div>
          )}
          <input
            type='text'
            name='userLogin'
            placeholder='Login'
            autoComplete='email'
            value={userLogin}
            onBlur={blurHandler}
            onChange={e => setUserLogin(e.target.value)}
            className='border border-black rounded-xl w-64 py-1 px-3'
          />
        </span>

        <span>
          {userPasswordDirty && userPasswordError && (
            <div className='text-center text-red-500 font-bold'>
              {userPasswordError}
            </div>
          )}
          <div className='p-2 flex relative'>
            <input
              type={passwordType}
              name='userPassword'
              placeholder='Password'
              autoComplete='password'
              value={userPassword}
              onBlur={blurHandler}
              onChange={e => setUserPassword(e.target.value)}
              className='border border-black rounded-xl w-64 py-1 px-3'
            />
            <span
              onClick={showPassword}
              className='cursor-pointer absolute flex justify-around items-center top-3 right-4'
            >
              {eye ? <FaEyeSlash size={25} /> : <FaEye size={25} />}
            </span>
          </div>
        </span>

        <br />

        <button
          type='submit'
          disabled={!isFormValid}
          className={`border border-black rounded-xl w-64 ${
            isFormValid ? 'bg-green-300 hover:bg-sky-200' : 'bg-red-200'
          }`}
        >
          Login
        </button>

        <label>
          Remember me
          <input
            type='checkbox'
            onChange={e => setRememberMe(e.target.checked)}
          />
        </label>

        <p>
          Don't have an account?{' '}
          <NavLink to={REGISTER_PAGE} className='underline text-blue-800'>
            Register
          </NavLink>
        </p>
      </form>
    </div>
  )
}

export default Login
