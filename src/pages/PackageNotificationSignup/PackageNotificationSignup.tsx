import {Footer} from "../../components/Footer/Footer";
import {Header} from "../../components/Header/Header";
import {GrayButton} from "../../components/buttons/GrayButton/GrayButton";
import {ClassicInput} from "../../components/Inputs/ClassicInput/ClassicInput";

import "./PackageNotificationSignup.css";
import {OkSvg} from "../../components/Svg/OkSvg";

export const PackageNotificationSignup = () => {
    return (
        <>
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
                        <ClassicInput
                            type="text"
                            placeholder="Nombre y apellido"
                        />
                        <ClassicInput type="text" placeholder="Celular" />
                        <ClassicInput
                            type="text"
                            placeholder="Correo electrónico"
                        />
                    </div>
                    <p className="form-subtext-smaller">
                        Asegúrate de que sea tu correo habitual, para no
                        perderte las notificaciones.
                    </p>
                    <GrayButton text="Enviar" svg={<OkSvg />} />
                </form>
            </div>
            <Footer />
        </>
    );
};
