import React, { useState } from "react";
import { LOGIN_PAGE } from "../utils/routes";
import { Link } from "react-router-dom";

const Register = () => {

    const usernameRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{1,}$/;
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/; 

    const [userLogin, setUserLogin] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userConfirmPassword, setUserConfirmPassword] = useState("");
    const [userLoginDirty, setUserLoginDirty] = useState(false);
    const [userPasswordDirty, setUserPasswordDirty] = useState(false);
    const [userConfirmPasswordDirty, setUserConfirmPasswordDirty] = useState(false);
    const [userLoginError, setUserLoginError] = useState("Enter your login");
    const [userPasswordError, setUserPasswordError] = useState("Enter a password");
    const [userConfirmPasswordError, setUserConfirmPasswordError] = useState("Confirm password");

    const validateField = (name, value) => {
        switch (name) {
            case "userLogin":
                if (!value) {
                    setUserLoginError("Login cannot be empty");
                } else if (!usernameRegex.test(value)) {
                    setUserLoginError("Login must contain at least one letter and one number");
                } else {
                    setUserLoginError("");
                }
                break;
            case "userPassword":
                if (!value) {
                    setUserPasswordError("Password cannot be empty");
                } else if (!passwordRegex.test(value)) {
                    setUserPasswordError("Password must be between 8 to 16 characters, and contain at least one number and one special character");
                } else {
                    setUserPasswordError("");
                }
                break;
            case "userConfirmPassword":
                if (value !== userPassword) {
                    setUserConfirmPasswordError("Passwords don't match");
                } else {
                    setUserConfirmPasswordError("");
                }
                break;
            default:
                break;
        }
    };

    const blurHandler = (e) => {
        const { name, value } = e.target;
        validateField(name, value);
    };

    const registration = (event) => {
        event.preventDefault();

        const userName = userLogin;
        const password = userPassword;

        const users = JSON.parse(localStorage.getItem('users')) || {};

        if (users[userName]) {
            alert('A user with the same name already exists.');
            return;
        }

        if (password !== userConfirmPassword) {
            alert('Passwords don\'t match.');
            return;
        }

        users[userName] = password;
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registration successful!');
        
        setUserLogin('');
        setUserPassword('');
        setUserConfirmPassword('');
    };

    const isFormValid = userLogin && userPassword && userConfirmPassword && !userLoginError && !userPasswordError;

    return (
        <div className="h-[80vh] flex items-center justify-center select-none">
            <form
                action=""
                className="flex flex-col items-center justify-start h-[60vh] bg-sky-900/50 w-[40%] min-w-[400px] gap-5 p-5 rounded-xl"
            >
                <h1 className="text-5xl p-[30px] text-slate-50 font-bold">
                    REGISTER
                </h1>

                <div>
                    {userLoginDirty && userLoginError && (
                        <div className="text-center text-red-500 font-bold">
                            {userLoginError}
                        </div>
                    )}
                    <input
                        type="text"
                        name="userLogin"
                        placeholder="Login"
                        value={userLogin}
                        onBlur={blurHandler}
                        onChange={(e) => setUserLogin(e.target.value)}
                        className="border border-black rounded-xl w-64 py-1 px-3"
                    />
                </div>

                <div>
                    {userPasswordDirty && userPasswordError && (
                        <div className="text-center text-red-500 font-bold">
                            {userPasswordError}
                        </div>
                    )}
                    <input
                        type="password"
                        name="userPassword"
                        placeholder="Password"
                        value={userPassword}
                        onBlur={blurHandler}
                        onChange={(e) => setUserPassword(e.target.value)}
                        className="border border-black rounded-xl w-64 py-1 px-3"
                    />
                </div>

                <div>
                    {userConfirmPasswordDirty && userConfirmPasswordError && (
                        <div className="text-center text-red-500 font-bold">
                            {userConfirmPasswordError}
                        </div>
                    )}
                    <input
                        type="password"
                        name="userConfirmPassword"
                        placeholder="Confirm Password"
                        value={userConfirmPassword}
                        onBlur={blurHandler}
                        onChange={(e) => setUserConfirmPassword(e.target.value)}
                        className="border border-black rounded-xl w-64 py-1 px-3"
                    />
                </div>

                <br />

                <button
                    onClick={registration}
                    type="submit"
                    disabled={!isFormValid}
                    className={`border border-black rounded-xl w-64 ${
                        isFormValid
                            ? "bg-amber-50 hover:bg-sky-200"
                            : "bg-red-200"
                    }`}
                >
                    Register
                </button>

                <p>
                    Have an account?{" "}
                    <Link to={LOGIN_PAGE} className="underline text-blue-800">
                        Login
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Register;
