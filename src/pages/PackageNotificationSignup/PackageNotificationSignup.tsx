import {Footer} from "../../components/Footer/Footer";
import {Header} from "../../components/Header/Header";
import {ClassicInput} from "../../components/Inputs/ClassicInput/ClassicInput";

import {OkSvg} from "../../components/Svg/OkSvg";
import {GrayButton} from "../../components/buttons/GrayButton/GrayButton";

export const PackageNotificationSignup = () => {
    return (
        <>
            <Header />
            <div className="px-4 lg:px-0 py-8">
                <form className="flex flex-col items-center bg-primary pt-10 pb-4 pb-2 sm:pb-5 px-4 sm:px-8 max-w-[522px] rounded-lg mx-auto">
                    <h2
                        className="text-3xl sm:text-5xl text-white mb-3 font-museo"
                        style={{lineHeight: "57px"}}
                    >
                        ¿Compraste en Temu y necesitas seguir tu pedido?
                    </h2>
                    <p className="mb-5">
                        Recibe las novedades de tu pedido por correo
                        electrónico, llenando el siguiente formulario:
                    </p>
                    <div>
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
                    <p className="text-sm mb-5">
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
