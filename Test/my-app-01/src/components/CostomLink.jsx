import { Link, useMatch } from "react-router-dom";

/* eslint-disable react/prop-types */
const CustomLink = ({ children, to, ...props }) => {
    const match = useMatch(to);

    return (
        <Link
        to={to}
        style={{ color: match ? "rgb(1, 1, 201)" : "#fff" }}
        {...props}
    >
        {children}
    </Link>
    );
};

export { CustomLink };
