import {Footer} from "../../components/Footer/Footer";
import {Header} from "../../components/Header/Header";
import {SameDayEmail} from "../../components/Svg/SameDayEmail";

export const Contact = () => {
    return (
        <div>
            <Header />
            <div className="flex items-center max-w-7xl mx-auto px-4 lg:px-0 py-[160px]">
                <div className="flex flex-col lg:flex-row lg: w-[903px] mx-auto space-x-12">
                    <div className="flex flex-col justify-between text-xl mx-auto lg:mx-0">
                        <p className="mb-4 lg:mb-0 text-2xl font-museo italic text-primary">
                            Nuestras vias de contacto:
                        </p>
                        <div className="mb-4 lg:mb-0">
                            <p className="font-extrabold">
                                Atención al cliente
                            </p>
                            <p>atc@soydelivery.com.uy</p>
                        </div>
                        <div className="mb-4 lg:mb-0">
                            <p className="font-extrabold">Recuersos humanos</p>
                            <p>rrhh@soydelivery.com.uy</p>
                        </div>
                        <div className="mb-4 lg:mb-0">
                            <p className="font-extrabold">
                                Atención al cliente
                            </p>
                            <p className="break-all">
                                comercial@soydeliveryglobal.com
                            </p>
                        </div>
                    </div>
                    <div className="hidden lg:flex rounded-md w-[534px] h-[296px]">
                        <SameDayEmail />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};
