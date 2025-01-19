import Logo from "./Logo";
import Menu from "./Menu";
import User from "./User";

const Header = () => {

    return <header className="h-25 bg-blue-950 flex justify-between items-center px-4">
        <Logo/>
        <Menu/>
        <User/>
    </header>;
};

export default Header