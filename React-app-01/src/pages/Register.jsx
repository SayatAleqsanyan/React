import React, { useState } from "react";
import { LOGIN_PAGE } from "../utils/routes";
import { Link } from "react-router-dom";

const Register = () => {
    const [userLogin, setUserLogin] = useState("");  // Փոխվեց 'userName' -> 'userLogin'
    const [userEmail, setUserEmail] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userLoginDirty, setUserLoginDirty] = useState(false);  // Փոխվեց 'userNameDirty' -> 'userLoginDirty'
    const [userEmailDirty, setUserEmailDirty] = useState(false);
    const [userPasswordDirty, setUserPasswordDirty] = useState(false);
    const [userLoginError, setUserLoginError] = useState("Enter your login");  // Փոխվեց 'userNameError' -> 'userLoginError'
    const [userEmailError, setUserEmailError] = useState("Enter your email");
    const [userPasswordError, setUserPasswordError] = useState("Enter a password");

    const blurHandler = (e) => {
        switch (e.target.name) {
            case "userLogin":  // Փոխվեց 'userName' -> 'userLogin'
                setUserLoginDirty(true);
                if (!userLogin) setUserLoginError("Login cannot be empty");
                else setUserLoginError("");
                break;
            case "userEmail":
                setUserEmailDirty(true);
                if (!userEmail) setUserEmailError("Email cannot be empty");
                else if (!/\S+@\S+\.\S+/.test(userEmail)) setUserEmailError("Email is not valid");
                else setUserEmailError("");
                break;
            case "userPassword":
                setUserPasswordDirty(true);
                if (!userPassword) setUserPasswordError("Password cannot be empty");
                else setUserPasswordError("");
                break;
            default:
                break;
        }
    };

    const isFormValid = userLogin && userEmail && userPassword;

    return (
        <div className="h-[80vh] flex items-center justify-center select-none">
            <form
                action=""
                className="flex flex-col items-center justify-start h-[60vh] bg-sky-900/50 w-[40%] min-w-[400px] gap-5 p-5 rounded-xl"
            >
                <h1 className="text-5xl p-[30px] text-slate-50 font-bold">REGISTER</h1>

                <div>
                    {userLoginDirty && userLoginError && (
                        <div className="text-center text-red-500 font-bold">{userLoginError}</div>  // Փոխվեց 'userNameError' -> 'userLoginError'
                    )}
                    <input
                        type="text"
                        name="userLogin"  // Փոխվեց 'userName' -> 'userLogin'
                        placeholder="Login"
                        value={userLogin}
                        onBlur={blurHandler}
                        onChange={(e) => setUserLogin(e.target.value)}  // Փոխվեց 'setUserName' -> 'setUserLogin'
                        className="border border-black rounded-xl w-64 py-1 px-3"
                    />
                </div>

                <div>
                    {userEmailDirty && userEmailError && (
                        <div className="text-center text-red-500 font-bold">{userEmailError}</div>
                    )}
                    <input
                        type="email"
                        name="userEmail"
                        placeholder="Email Address"
                        value={userEmail}
                        onBlur={blurHandler}
                        onChange={(e) => setUserEmail(e.target.value)}
                        className="border border-black rounded-xl w-64 py-1 px-3"
                    />
                </div>

                <div>
                    {userPasswordDirty && userPasswordError && (
                        <div className="text-center text-red-500 font-bold">{userPasswordError}</div>
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

                <label>
                    <input type="checkbox" />
                    Remember me
                </label>

                <button
                    type="submit"
                    disabled={!isFormValid}
                    className={`border border-black rounded-xl w-64 ${isFormValid ? 'bg-amber-50 hover:bg-sky-200' : 'bg-red-200'}`}
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
