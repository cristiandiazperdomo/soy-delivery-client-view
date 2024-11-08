import {Link} from "react-router-dom";
import "./HeaderLink.css";

interface HeaderProps {
    name: string;
    direction: string;
}

export const HeaderLink = ({name, direction}: HeaderProps) => {
    return (
        <Link to={direction} className="header-link">
            {name}
        </Link>
    );
};
