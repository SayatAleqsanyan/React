import React, { useState } from "react";
import { Link } from "react-router-dom";  // ուղղված է
import { REGISTER_PAGE } from "../utils/routes";

const Login = () => {
    const [userLogin, setUserLogin] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userLoginDirty, setUserLoginDirty] = useState(false);
    const [userPasswordDirty, setUserPasswordDirty] = useState(false);
    const [userLoginError, setUserLoginError] = useState("Enter login");
    const [userPasswordError, setUserPasswordError] = useState("Enter password");

    const blurHandler = (e) => {
        switch (e.target.name) {
            case "userLogin":
                setUserLoginDirty(true);
                if (!userLogin) setUserLoginError("Login cannot be empty");
                else setUserLoginError("");
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

    const isFormValid = userLogin && userPassword;

    return (
        <div className="h-[80vh] flex items-center justify-center select-none">
            <form
                action=""
                className="flex flex-col items-center justify-start h-[60vh] bg-sky-900/50 w-[40%] min-w-[400px] gap-5 p-5 rounded-xl"
            >
                <h1 className="text-5xl p-[40px] text-slate-50 font-bold">LOGIN</h1>

                <span>
                {userLoginDirty && userLoginError && (
                    <div className="text-center text-red-500 font-bold" >{userLoginError}</div>
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
                </span>

                <span>
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
                </span>

                <label>
                    <input type="checkbox" />
                    Remember me
                </label>

                <button
                    type="submit"
                    disabled={!isFormValid}
                    className={`border border-black rounded-xl w-64 ${isFormValid ? 'bg-amber-50 hover:bg-sky-200' : 'bg-red-200'}`}
                >
                    Login
                </button>

                <p>
                    Don't have an account?{" "}
                    <Link to={REGISTER_PAGE} className="underline text-blue-800">
                        Register
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
