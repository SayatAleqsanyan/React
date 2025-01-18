import React, {useState} from 'react';
import {HOME_PAGE, REGISTER_PAGE} from "../utils/routes";
import {useNavigate} from "react-router-dom";
import Input from "../components/ui/Input";
import {useForm} from "react-hook-form";
import {emailValidation, passwordValidation} from "../utils/validations";

const Login = () => {

    let {register,
        handleSubmit,
        formState: {errors, isValid}
    } = useForm({mode: 'onBlur'})


    let localUser = JSON.parse(localStorage.getItem('saveUser')) || null

    const navigate = useNavigate()

    const [remember, setRemember] = useState(false)

    const login = (data) => {
        let {email, password} = data

        if(email && password){
            let users = JSON.parse(localStorage.getItem('users'))

            let user = users.find(u => u.email === email && u.password === password)

            if(user ){
                if (remember){
                    let saveUser = {
                        email,
                        password
                    }
                    localStorage.setItem('saveUser', JSON.stringify(saveUser))
                }
                localStorage.setItem('token', 'ghgfgaAJFSA45f6a456f4a56f4a6F4A65f4a56F4A65F')
                localStorage.setItem('user', JSON.stringify(user))
                navigate(HOME_PAGE)
                window.location.reload()
            }else {
                alert("user is not found")
            }
        }
    }

    return (
        <div className="w-full h-full flex justify-center items-center  bg-gray-400" >
            <form onSubmit={handleSubmit(login)} className='w-full h-[80vh] flex  justify-center items-center' >
                <div className='gap-3 flex flex-col justify-center items-center  p-8 bg-blue-300 shadow-lg shadow-indigo-500/50 ... rounded-lg' >
                    <h1 className='text-xl font-bold'>Login</h1>
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

                    <label>
                        <input
                            type='checkbox'
                            value={remember}
                            onChange={e => setRemember(e.target.checked)}
                        />
                        Remember me
                    </label>
                    <a href='#' className='underline text-blue-600'>Forgot password?</a>
                    <button
                        onClick={login}
                        type='submit' className='border border-black rounded-xl w-64 bg-amber-300 disabled:bg-amber-50'
                        disabled={!isValid}
                    >
                        Login
                    </button>
                    <p>Dont have an account <a href={REGISTER_PAGE} className='underline text-blue-600'>Register</a></p>
                </div>
            </form>
        </div>
    );
};

export default Login;