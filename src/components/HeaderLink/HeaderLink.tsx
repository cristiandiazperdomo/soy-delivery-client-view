import {useNavigate} from "react-router-dom";

interface HeaderLinkProps {
    name: string;
    direction: string;
}

export const HeaderLink = ({name, direction}: HeaderLinkProps) => {
    const navigate = useNavigate();

    const handleRelocation = () => {
        if (direction.startsWith("#")) {
            navigate("/");
            const element = document.getElementById(direction.replace("#", ""));
            if (element)
                element.scrollIntoView({behavior: "smooth", block: "start"});
        } else {
            navigate(direction);
        }
    };

    return (
        <button
            className="font-extrabold text-white text-2xl font-simplysans"
            onClick={handleRelocation}
        >
            {name}
        </button>
    );
};
