import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { REGISTER_PAGE } from '../../utils/routes'
import { notify } from '../../utils/notify'
import { useForm } from 'react-hook-form'
import { emailValidation, passwordValidation } from '../../utils/validations'
import axios from 'axios'
import Input from '../../components/ui/input'
import Button from '../../components/ui/Button'

const Login = () => {
  const [rememberMe, setRememberMe] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const getUsers = async () => {
    try {
      const response = await axios.get('http://localhost:4000/users')
      return response.data
    } catch (error) {
      console.log(error.message)
      return []
    }
  }

  const logining = async data => {
    try {
      const oldUsers = await getUsers()
      const { email, password } = data
      const foundUser = oldUsers.find(
        user => user.email === email && user.password === password
      )

      if (foundUser) {
        if (rememberMe) {
          localStorage.setItem('rememberMe', JSON.stringify({ email, password }))
        } else {
          localStorage.removeItem('rememberMe')
        }

        localStorage.setItem('Token', foundUser.username)
        window.location.reload()
      } else {
        notify('Login or password is incorrect!', 'red')
      }
    } catch (error) {
      console.error(error)
      notify('An error occurred during login.', 'red')
    }
  }

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('rememberMe'))
    if (savedUser) {
      setValue('email', savedUser.email)
      setValue('password', savedUser.password)
    }
  }, [setValue])

  return (
    <div className="min-h-[500px] p-[50px] h-[80vh] flex items-center justify-center select-none">
      <form
        onSubmit={handleSubmit(logining)}
        className="min-h-[500px] flex flex-col items-center justify-start h-[60vh] bg-sky-900/50 w-[40%] min-w-[400px] gap-5 p-5 rounded-xl"
      >
        <h1 className="text-5xl p-[40px] text-slate-50 font-bold">LOGIN</h1>

        <Input
          name="email"
          register={register}
          type="text"
          placeholder="Email"
          validation={emailValidation}
          error={errors.email?.message}
        />

        <Input
          name="password"
          register={register}
          type="password"
          placeholder="Password"
          validation={passwordValidation}
          error={errors.password?.message}
        />

        <a href="#" className="underline text-red-500">
          Forgot password?
        </a>

        <Button isValid={isValid} children="Login" />

        <label className="flex items-center gap-2">
          Remember me
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={e => setRememberMe(e.target.checked)}
            className="w-4 h-4"
          />
        </label>

        <p>
          Don't have an account?
          <NavLink to={REGISTER_PAGE} className="underline text-blue-800 ml-1">
            Register
          </NavLink>
        </p>
      </form>
    </div>
  )
}

export default Login
