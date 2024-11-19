import {Footer} from "../../components/Footer/Footer";
import {Header} from "../../components/Header/Header";
import {ClassicInput} from "../../components/Inputs/ClassicInput/ClassicInput";
import {OkSvg} from "../../components/Svg/OkSvg";
import {GrayButton} from "../../components/buttons/GrayButton/GrayButton";

export const ClientContactForm = () => {
    return (
        <>
            <Header />
            <div className="flex justify-center my-12 px-4 xl:px-0">
                <div className="px-4 md:px-8 pt-8 pb-12 bg-primary rounded-2xl max-w-[522px]">
                    <h2 className="text-[44px] text-white font-extrabold font-museo">
                        Te ayudamos a impulsar tu negocio
                    </h2>
                    <p className="text-gray text-sm mb-8 mt-2 font-semibold">
                        Completa el siguiente formulario y nos pondremos el
                        contacto contigo
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                        <ClassicInput
                            type="text"
                            placeholder="Nombre y apellido"
                        />
                        <ClassicInput
                            type="text"
                            placeholder="Nombre de tu negocio"
                        />
                        <ClassicInput type="text" placeholder="Teléfono" />
                        <ClassicInput type="text" placeholder="E-mail" />
                        <select
                            id="countries"
                            className="bg-white text-gray-900 rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full mb-[19px] outline-none p-4"
                        >
                            <option selected>Pedidos semanales</option>
                            <option value="US">Menos de 50</option>
                            <option value="CA">Entre 50 y 100</option>
                            <option value="FR">Más de 100</option>
                        </select>
                        <select
                            id="countries"
                            className="bg-white text-gray-900 rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full mb-[19px] outline-none p-4"
                        >
                            <option selected>Tamaño de paquetes</option>
                            <option value="US">Pequeños</option>
                            <option value="CA">Medianos</option>
                            <option value="FR">Grandes</option>
                        </select>
                    </div>
                    <div>
                        <textarea
                            className="w-full outline-none p-4 rounded-md"
                            placeholder="Tu mensaje aquí"
                            rows={5}
                        />
                    </div>
                    <div className="flex items-center justify-center my-6">
                        <GrayButton text="Enviar" svg={<OkSvg />} />
                    </div>
                    <div className="grid grid-cols-2 text-white">
                        <div className="hidden lg:flex flex-col">
                            <div className="flex items-center">
                                <svg
                                    width="28"
                                    height="28"
                                    viewBox="0 0 28 28"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clipPath="url(#clip0_2661_20542)">
                                        <path
                                            d="M7.92578 12.7501C7.92578 9.1176 10.8187 6.17285 14.3873 6.17285C17.9559 6.17285 20.8489 9.1176 20.8489 12.7501C20.8489 16.3542 18.0943 20.5598 14.8766 22.0637C14.1265 22.4143 14.6481 22.4143 13.898 22.0637C10.6804 20.5598 7.92578 16.3542 7.92578 12.7501Z"
                                            stroke="#FDFCFA"
                                            strokeWidth="1.03846"
                                        />
                                        <circle
                                            cx="14.386"
                                            cy="12.6345"
                                            r="2.42308"
                                            stroke="#FDFCFA"
                                            strokeWidth="1.03846"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2661_20542">
                                            <rect
                                                width="18"
                                                height="18"
                                                fill="white"
                                                transform="translate(5.38672 5.25)"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <span className="ml-3 font-bold text-gray">
                                    DIRECCIÓN
                                </span>
                            </div>
                            <div className="ml-10">
                                <p>República Corea 2962</p>
                                <p>San Salvador 1480</p>
                            </div>
                        </div>
                        <div className="hidden lg:flex flex-col">
                            <div className="flex items-center font-extrabold">
                                <svg
                                    width="28"
                                    height="28"
                                    viewBox="0 0 32 28"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M24.638 13.2805C24.638 14.8194 23.8083 16.2768 22.3395 17.3785C20.8704 18.4803 18.8022 19.1868 16.4818 19.1868C15.8653 19.1868 15.2656 19.1368 14.6896 19.0425C14.3246 18.9828 14.0282 19.1238 13.8622 19.2267C13.686 19.3358 13.5348 19.4772 13.4155 19.6019C13.186 19.8418 12.9514 20.1536 12.7564 20.4129L12.7347 20.4417C12.6762 20.5195 12.621 20.5926 12.5688 20.6608C12.5299 20.5083 12.4908 20.3389 12.4494 20.1551C12.4405 20.1154 12.4315 20.0749 12.4223 20.0339C12.3476 19.7 12.2642 19.3272 12.1672 19.0156C12.1124 18.8393 12.0429 18.6475 11.951 18.4742C11.869 18.3196 11.7142 18.0714 11.4375 17.9127C9.46928 16.7831 8.32553 15.082 8.32553 13.2805C8.32553 11.7417 9.15522 10.2842 10.6241 9.18255C12.0932 8.08071 14.1614 7.37427 16.4818 7.37427C18.8022 7.37427 20.8704 8.08071 22.3395 9.18255C23.8083 10.2842 24.638 11.7417 24.638 13.2805Z"
                                        stroke="white"
                                        strokeWidth="1.6875"
                                    />
                                </svg>

                                <span className="ml-3 font-bold text-gray">
                                    CORREO
                                </span>
                            </div>
                            <div className="ml-10">
                                <p>comercial@soydelivery.com</p>
                                <p>rrhh@soydelivery.com.uy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};
