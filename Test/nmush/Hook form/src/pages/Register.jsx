import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {LOGIN_PAGE} from "../utils/routes";
import Input from "../components/ui/Input";
import {userValidation, emailValidation, passwordValidation} from "../utils/validations";
import {useForm} from "react-hook-form";

const Register = () => {

    let {register,
        handleSubmit,
        formState: {errors, isValid}
    } = useForm({mode: 'onBlur'})

    const navigate = useNavigate()


    let users = localStorage.getItem('users') || []

    const registerCheck = (data) => {
        let {email, password, username} = data
        if(email && password){
            let user = {
                id: Math.random(),
                username,
                email,
                password
            }

            users.push(user)

            localStorage.setItem('users', JSON.stringify(users))
            navigate(LOGIN_PAGE)
        }
    }

    return (
        <div className="w-full h-full flex justify-center items-center bg-gray-400">
            <form onSubmit={handleSubmit(registerCheck)} className=' w-full h-[80vh] flex  justify-center items-center'>
                <div
                    className='gap-3 flex flex-col justify-center items-center  p-8 bg-blue-300 shadow-lg shadow-indigo-500/50 ... rounded-lg'>
                    <h1 className='text-xl font-bold'>Register</h1>

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
                        placeholder='Password'
                        validation={passwordValidation}
                        error={errors.password && errors.password.message}
                    />
                    <label><input type='checkbox'/>Remember me</label>
                    <a href='#' className='underline text-blue-600'>Forgot password?</a>
                    <button onClick={registerCheck} type='submit'
                            className='border border-black rounded-xl w-64 bg-amber-50'>Register
                    </button>
                    <p>Have an account <Link to={LOGIN_PAGE}
                                            className='underline text-blue-600'>Login</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Register;