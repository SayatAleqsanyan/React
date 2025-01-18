import React from "react";
import { Link } from "react-router";
import { REGISTER_PAGE } from "../utils/routes";

const Login = () => {
    const login = () => {
        localStorage.setItem("token", "dswcvsdvcsdadvsd");
        window.location.reload(); 
    };

    return (
        <div className="h-[80vh] flex  items-center justify-center select-none">
            <form
                action=""
                className="flex flex-col items-center justify-start h-[60vh] bg-sky-900/50 w-[40%] min-w-[400px] gap-5 p-5 rounded-xl"
            >
                <h1 className="text-5xl p-[60px] text-slate-50">LOGIN</h1>

                <input type="text" className="border border-black rounded-xl w-64 py-1 px-3"/>
                <input type="password" className="border border-black rounded-xl w-64 py-1 px-3"/>
<label>
                    <input type="checkbox" />
                    Remember me
                </label>
                {/* <a href="#" className="underline text-blue-600">
                    Forgot password?
                </a> */}
                <button
                onClick={login}
                    type="submit"
                    className="border border-black rounded-xl w-64 bg-amber-50 hover:bg-sky-200"
                >
                    Login
                </button>
                <p>
                    Have an account{" "}
                    <Link to={REGISTER_PAGE} className="underline text-blue-800">
                        Register
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
