import {Link} from "react-router-dom";
import {HeaderLink} from "../HeaderLink/HeaderLink";

import logo from "../../assets/images/logo.svg";

const headerOptions = [
    {name: "Inicio", direction: "/"},
    {name: "Servicio", direction: "#servicio"},
    {name: "Conocenos", direction: "/conocenos"},
    {name: "Contacto", direction: "/contacto"},
    {name: "Carrito", direction: "/carrito"},
];

const availableOptions = headerOptions.filter((option) =>
    "Inicio, Servicio, Contacto".includes(option.name)
);

export const Header = () => {
    return (
        <header className="h-[140px] bg-primary">
            <div className="flex justify-between items-center px-4 xl:px-0 py-2 max-w-7xl h-full mx-auto my-auto">
                <Link to="/">
                    <img
                        src={logo}
                        alt="logo"
                        className="w-[200px] lg:w-[252px] max-h-auto"
                    />
                </Link>
                <ul className="hidden lg:flex justify-between gap-10 w-[617px]">
                    {availableOptions.map((route) => (
                        <HeaderLink
                            key={route.name}
                            name={route.name}
                            direction={route.direction}
                        />
                    ))}
                </ul>
                <div className="block lg:hidden">
                    <svg
                        width="28"
                        height="28"
                        viewBox="0 0 16 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M15 7.35135L7.02719 7.35135L1 7.35135M15 13L1 13M15 2L7.02719 2L1 2"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>
        </header>
    );
};
