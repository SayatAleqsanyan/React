import React, { useState } from "react";
import { LOGIN_PAGE } from "../utils/routes";
import { Link, useNavigate } from "react-router-dom";
import { notify } from "../utils/notify";

const Register = () => {
    const navigate = useNavigate();
    const usernameRegex = /^[A-Za-z0-9]{5,15}$/;
    const passwordRegex = /^[A-Za-z0-9]{8,15}$/;

    const [userLogin, setUserLogin] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userConfirmPassword, setUserConfirmPassword] = useState("");
    const [userLoginDirty] = useState(false);
    const [userPasswordDirty] = useState(false);
    const [userConfirmPasswordDirty] = useState(false);
    const [userLoginError, setUserLoginError] = useState("Enter your login");
    const [userPasswordError, setUserPasswordError] =
        useState("Enter a password");
    const [userConfirmPasswordError, setUserConfirmPasswordError] =
        useState("Confirm password");

    const validateField = (e) => {
        if (e && e.target) {
            const { name, value } = e.target;  

            switch (name) {
                case "userLogin":
                    if (!value) {
                        setUserLoginError("Login cannot be empty");
                        } else if (!usernameRegex.test(value)) {
                            setUserLoginError(
                                "Login must contain at least one letter and one number"
                            );
                        } else {
                            setUserLoginError("");
                        }
                        break;
                    case "userPassword":
                        if (!value) {
                            setUserPasswordError("Password cannot be empty");
                        } else if (!passwordRegex.test(value)) {
                            setUserPasswordError(
                                "Password must be between 8 to 16 characters, and contain at least one number and one special character"
                            );
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
            }
        };
        
        const blurHandler = (e) => {
            validateField(e);
        };
        

    const registration = (event) => {
        event.preventDefault();

        const userName = userLogin;
        const password = userPassword;

        const users = JSON.parse(localStorage.getItem("users")) || [];

        if (users[userName]) {
            notify("A user with the same name already exists.");
            return;
        }

        if (password !== userConfirmPassword) {
            notify("Passwords don't match.");
            return;
        }

        users.push({
            id: users.length + 1,
            name: userLogin,
            password: userPassword
        })

        localStorage.setItem("users", JSON.stringify(users));
        notify("Registration successful!", "green");
        navigate(LOGIN_PAGE);
        setUserLogin("");
        setUserPassword("");
        setUserConfirmPassword("");
    };

    const isFormValid =
        userLogin &&
        userPassword &&
        userConfirmPassword &&
        !userLoginError &&
        !userPasswordError;

    return (
        <div className="h-[80vh] flex items-center justify-center select-none">
            <form
                action=""
                className="min-h-[500px] flex flex-col items-center justify-start h-[60vh] bg-sky-900/50 w-[40%] min-w-[400px] gap-5 p-5 rounded-xl"
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
                        autoComplete="Login"
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
                        autoComplete="Password"
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
                        autoComplete="current-password"
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
