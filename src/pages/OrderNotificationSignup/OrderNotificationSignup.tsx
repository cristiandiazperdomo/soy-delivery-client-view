import {Footer} from "../../components/Footer/Footer";
import {Header} from "../../components/Header/Header";
import "./OrderNotificationSignup.css";

export const OrderNotificationSignup = () => {
    return (
        <div className="min-h-screen">
            <Header />
            <div className="form">
                <form className="form-container">
                    <h2 className="form-title">
                        ¿Compraste en Temu y necesitas seguir tu pedido?
                    </h2>
                    <p className="form-subtext">
                        Recibe las novedades de tu pedido por correo
                        electrónico, llenando el siguiente formulario:
                    </p>
                    <div className="input-container">
                        <input placeholder="Nombre y apellido" />
                        <input placeholder="Celular" />
                        <input placeholder="Correo electrónico" />
                    </div>
                    <p className="form-subtext-smaller">
                        Asegúrate de que sea tu correo habitual, para no
                        perderte las notificaciones.
                    </p>
                    <button className="form-button">
                        <span>Enviar</span>
                        <svg
                            width="24"
                            height="25"
                            viewBox="0 0 24 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                y="0.5"
                                width="24"
                                height="24"
                                rx="5"
                                fill="#414141"
                            />
                            <path
                                d="M17.3327 8.5L9.99935 15.8333L6.66602 12.5"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    );
};
