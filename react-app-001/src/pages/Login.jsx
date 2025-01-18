import React from "react";
import { Link } from "react-router";
import { REGISTER_PAGE } from "../utils/routes";

const Login = () => {
    const login = () => {
        localStorage.setItem("token", "dswcvsdvcsdadvsd");
        window.location.reload();
    };

    return (
        <div className="h-[80vh] flex  items-center justify-center">
            <form
                action=""
                className="flex flex-col items-center justify-start  h-[60vh] bg-green-500 w-[40%] gap-5 p-5"
            >
                <h1>LOGIN</h1>

                <input type="text" />
                <input type="text" />
<label>
                    <input type="checkbox" />
                    Remember me
                </label>
                <a href="#" className="underline text-blue-600">
                    Forgot password?
                </a>
                <button
                onClick={login}
                    type="submit"
                    className="border border-black rounded-xl w-64 bg-amber-50"
                >
                    Login
                </button>
                <p>
                    Have an account{" "}
                    <Link to={REGISTER_PAGE} className="underline text-blue-600">
                        Register
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
