import React from "react";
import { LOGIN_PAGE } from "../utils/routes";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="h-[80vh] flex  items-center justify-center">
            <form
                action=""
                className="flex flex-col items-center justify-start  h-[60vh] bg-green-500 w-[40%] gap-5 p-5 rounded-xl"
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
                    type="submit"
                    className="border border-black rounded-xl w-64 bg-amber-50"
                >
                    Register
                </button>
                <p>
                    Have an account{" "}
                    <Link to={LOGIN_PAGE} className="underline text-blue-600">
                        Login
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Register;
