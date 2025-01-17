import {Link} from "react-router-dom";

const Notfound = () => {
    return (
        <>
            <h1 className="text-5xl font-bold">Not Found</h1>
            <p className="text-3xl font-bold">This page does not exist</p>
            <div className="text-3xl">Go to <Link to="/" className="underline font-bold">Home</Link></div>
        </>
    );
}

export { Notfound };