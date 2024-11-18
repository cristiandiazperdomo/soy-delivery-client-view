import {Link} from "react-router-dom";

interface HeaderLinkProps {
    name: string;
    direction: string;
}

export const HeaderLink = ({name, direction}: HeaderLinkProps) => {
    return (
        <Link to={direction} className="font-extrabold text-white text-2xl">
            {name}
        </Link>
    );
};
