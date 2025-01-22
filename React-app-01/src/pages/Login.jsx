import React, { useState } from "react";
import { Link } from "react-router-dom";
import { REGISTER_PAGE } from "../utils/routes";

import { notify } from "../utils/notify";

const Login = () => {
    const [userLogin, setUserLogin] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userLoginDirty] = useState(false);
    const [userPasswordDirty] = useState(false);
    const [userLoginError, setUserLoginError] = useState("Enter login");
    const [userPasswordError, setUserPasswordError] =
        useState("Enter password");

    const validateField = (name, value) => {
        switch (name) {
            case "userLogin":
                if (!value) {
                    setUserLoginError("Login cannot be empty");
                } else {
                    setUserLoginError("");
                }
                break;
            case "userPassword":
                if (!value) {
                    setUserPasswordError("Password cannot be empty");
                } else {
                    setUserPasswordError("");
                }
                break;
            default:
                break;
        }
    };

    const blurHandler = (e) => {
        validateField(e.target.name, e.target.value);
    };

    const logining = (event) => {
        event.preventDefault();

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const user = users.find(user => user.name === userLogin);

        if (!user) {
            notify("User does not exist!");
            return;
        }

        if (user.password !== userPassword) {
            notify("Login or password entered incorrectly!", "red");
            return;
        }

        localStorage.setItem("Token", userLogin);
        window.location.reload();

        notify("Succes", "green");
        setUserLogin("");
        setUserPassword("");
    };

    const isFormValid =
        userLogin && userPassword && !userLoginError && !userPasswordError;

    return (
        <div className="min-h-[500px] p-[50px] h-[80vh] flex items-center justify-center select-none">
            <form
                action=""
                onSubmit={logining}
                className="min-h-[500px] flex flex-col items-center justify-start h-[60vh] bg-sky-900/50 w-[40%] min-w-[400px] gap-5 p-5 rounded-xl"
            >
                <h1 className="text-5xl p-[40px] text-slate-50 font-bold">
                    LOGIN
                </h1>

                <span>
                    {userLoginDirty && userLoginError && (
                        <div className="text-center text-red-500 font-bold">
                            {userLoginError}
                        </div>
                    )}
                    <input
                        type="text"
                        name="userLogin"
                        placeholder="Login"
                        autoComplete="userName"
                        value={userLogin}
                        onBlur={blurHandler}
                        onChange={(e) => setUserLogin(e.target.value)}
                        className="border border-black rounded-xl w-64 py-1 px-3"
                    />
                </span>

                <span>
                    {userPasswordDirty && userPasswordError && (
                        <div className="text-center text-red-500 font-bold">
                            {userPasswordError}
                        </div>
                    )}
                    <input
                        type="password"
                        name="userPassword"
                        placeholder="Password"
                        autoComplete="password"
                        value={userPassword}
                        onBlur={blurHandler}
                        onChange={(e) => setUserPassword(e.target.value)}
                        className="border border-black rounded-xl w-64 py-1 px-3"
                    />
                </span>

                <br />

                <button
                    // onClick={logining}
                    type="submit"
                    disabled={!isFormValid}
                    className={`border border-black rounded-xl w-64 ${
                        isFormValid
                            ? "bg-green-300 hover:bg-sky-200"
                            : "bg-red-200"
                    }`}
                >
                    Login
                </button>

                <p>
                    Don't have an account?{" "}
                    <Link
                        to={REGISTER_PAGE}
                        className="underline text-blue-800"
                    >
                        Register
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
