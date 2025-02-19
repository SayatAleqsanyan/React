import React from 'react'
import {LOGIN_PAGE} from '../../utils/routes'
import {NavLink, useNavigate} from 'react-router-dom'
import {notify} from '../../utils/notify'
import axios from 'axios'
import {emailValidation, passwordValidation, userValidation} from "../../utils/validations";
import {useForm} from "react-hook-form";
import Input from "../../components/ui/input";
import Button from '../../components/ui/Button'

const Register = () => {
  const navigate = useNavigate()

  let {
    register,
    handleSubmit,
    formState: {errors, isValid}
  } = useForm({mode: 'onBlur'});

  const getUsers = async () => {
    try {
      const response = await axios.get('http://localhost:4000/users')
      return response.data
    } catch (error) {
      console.log(error.message)
      return []
    }
  }

  const registration = async (data) => {
    const oldUsers = await getUsers()
    const {email, password, username} = data
    if (oldUsers.find((user) => user.email === email || user.userName === username)) {
      notify("User already exists!", 'red')
    } else {
      const user = {
        userName: username,
        email,
        password,
        isBlocked: false
      };
      try {
        await axios.post('http://localhost:4000/users', user)
      } catch (error) {
        console.log(error.message)
      }

      notify('Registration successful!', 'green')
      navigate(LOGIN_PAGE)
    }
  }

  return (
    <div className='min-h-[500px] p-[50px] h-[80vh] flex items-center justify-center select-none'>
      <form
        onSubmit={handleSubmit(registration)}
        className='min-h-[500px] flex flex-col items-center justify-start h-[60vh] bg-sky-900/50 w-[40%]
        min-w-[400px] gap-5 p-5 rounded-xl'
      >
        <h1 className='text-5xl p-[30px] text-slate-50 font-bold'>REGISTER</h1>

        <Input
          name="username"
          register={register}
          type="text"
          placeholder="Username"
          validation={userValidation}
          error={errors.username && errors.username.message}
        />

        <Input
          name="email"
          register={register}
          type="text"
          placeholder="Email"
          validation={emailValidation}
          error={errors.email && errors.email.message}
        />

        <Input
          name="password"
          register={register}
          type="password"
          placeholder="Password"
          validation={passwordValidation}
          error={errors.password && errors.password.message}
        />

        <br/>

        <Button isValid={isValid} children="Register" />

        <p>
          Have an account?
          <NavLink to={LOGIN_PAGE} className='underline text-blue-800'>
            Login
          </NavLink>
        </p>
      </form>
    </div>
  )
}

export default Register
