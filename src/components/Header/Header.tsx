import {HeaderLink} from "../HeaderLink/HeaderLink";
import logo from "../../assets/logo.svg";
import "./Header.css";

export const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="logo" className="header-logo" />
            <ul className="routes">
                {[
                    {name: "Inicio", direction: "/"},
                    {name: "Servicio", direction: "/servicio"},
                    {name: "Conocenos", direction: "/conocenos"},
                    {name: "Contacto", direction: "/contacto"},
                    {name: "Carrito", direction: "/carrito"},
                ].map((route) => (
                    <HeaderLink name={route.name} direction={route.direction} />
                ))}
            </ul>
            <div className="mobile-routes">
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
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </div>
        </header>
    );
};