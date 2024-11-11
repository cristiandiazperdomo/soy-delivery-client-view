import {Footer} from "../../components/Footer/Footer";
import {Header} from "../../components/Header/Header";

import {PackageInformationDetails} from "../../components/PackageInformationDetails/PackageInformationDetails";
import "./PackageInformation.css";

export const PackageInformation = () => {
    return (
        <div>
            <Header />
            <div className="package-information">
                <div className="package-information-container">
                    <div>
                        <div className="banner-top">
                            <svg
                                width="45"
                                height="60"
                                viewBox="0 0 45 60"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M22.3859 0.108666C10.0205 0.166096 0.0463077 9.52021 0.108689 20.9973C0.213248 40.3539 19.0661 57.9082 19.0661 57.9082C21.0843 59.787 24.3038 59.7143 26.2214 57.7467C26.2214 57.7467 44.9877 38.4815 44.891 20.7879C44.8294 9.31041 34.7526 0.0510403 22.3859 0.108666ZM20.9621 34.401C20.9621 34.9632 20.3506 35.3144 19.8619 35.033L11.654 30.3055C10.9019 29.8722 10.4388 29.0727 10.4388 28.2075V19.7926C10.4388 19.2902 10.9878 18.9786 11.422 19.2347L19.9306 24.2564C20.5701 24.6338 20.9623 25.3192 20.9623 26.0594L20.9621 34.401ZM21.722 21.3628L12.5941 16.0227C12.0652 15.7133 12.0689 14.9505 12.6009 14.6464L21.7601 9.40965C22.2952 9.10374 22.9536 9.10511 23.4873 9.41375L32.5443 14.6483C33.072 14.9532 33.0757 15.7108 32.5511 16.021L23.5252 21.3589C22.9699 21.687 22.2789 21.6886 21.722 21.3628ZM34.5613 28.2073C34.5613 29.0725 34.0981 29.8722 33.346 30.3053L25.1379 35.0328C24.6493 35.3142 24.0378 34.963 24.0378 34.4008V26.0592C24.0378 25.3188 24.4299 24.6336 25.0694 24.2562L33.5779 19.2345C34.012 18.9784 34.5611 19.2898 34.5611 19.7924V28.2073H34.5613Z"
                                    fill="white"
                                />
                            </svg>
                            <div className="current-status">
                                <p>¡Hola Nombre Apellido!</p>
                                <p>Tu pedido fue Asignado a un conductor</p>
                            </div>
                        </div>
                        <div className="package-tracker">
                            <div className="package-tracker-header">
                                <div className="svg-container">
                                    <svg
                                        viewBox="0 0 12 11"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle
                                            cx="6"
                                            cy="5.37988"
                                            r="4.6875"
                                            stroke="white"
                                            strokeWidth="1.125"
                                        />
                                        <path
                                            d="M6 2.00488V5.37988L8.625 6.50488"
                                            stroke="white"
                                            strokeWidth="0.75"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                                <span>Rastreo</span>
                            </div>
                            <div className="package-tracker-body">
                                <div className="package-tracker-location">
                                    <div className="rounded-ball-container">
                                        <div className="gray rounded-ball"></div>
                                        <div className="line">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"
                                            >
                                                <path
                                                    stroke="none"
                                                    d="M0 0h24v24H0z"
                                                    fill="none"
                                                />
                                                <path d="M6 9l6 6l6 -6" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="package-tracker-status">
                                        <p>
                                            Recibido, esperando a ser procesado
                                        </p>
                                        <p>17/05/2024 - 14:00hs</p>
                                    </div>
                                </div>
                                <div className="package-tracker-location">
                                    <div className="rounded-ball-container">
                                        <div className="rounded-ball no-line"></div>
                                    </div>
                                    <div className="package-tracker-status">
                                        <p>
                                            Recibido, esperando a ser procesado
                                        </p>
                                        <p>17/05/2024 - 14:00hs</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="extra-data">
                        <div className="extra-data-header">
                            <div className="svg-container">
                                <svg
                                    viewBox="0 0 14 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3.16667 3.83333H9.66667M3.16667 7H9.66667M3.16667 10H9.66667M13 4.33333V10C13 12 12 13.3333 9.66667 13.3333H4.33333C2 13.3333 1 12 1 10V4.33333C1 2.33333 2 1 4.33333 1H9.66667C12 1 13 2.33333 13 4.33333Z"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeMiterlimit="10"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </div>
                            <span>Información del pedido:</span>
                        </div>
                        <PackageInformationDetails />
                    </div>
                </div>
                <div className="look-for-my-package">
                    <div className="look-for-my-package-header">
                        <div className="svg-container">
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M7 1.37988L8.854 5.32941L13 5.96663L10 9.03919L10.708 13.3799L7 11.3294L3.292 13.3799L4 9.03919L1 5.96663L5.146 5.32941L7 1.37988Z"
                                    stroke="white"
                                    strokeWidth="1.125"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                        <span>Quiero retirar mi paquete</span>
                    </div>
                    <div className="look-for-my-package-body">
                        <p>
                            Cuando tu paquete llegue a nuestro centro de
                            distribución, tardará unas 48 horas en procesarse
                            antes de salir a ruta.
                        </p>
                        <p>
                            Para evitar esta espera, podés retirarlo en persona
                            en nuestro local en{" "}
                            <span className="font-semibold">
                                República de Corea 2962, de lunes a viernes de
                                8:00 a 18:00 hrs, y sábados de 11:00 a 15:00
                                hrs.
                            </span>
                        </p>
                        <p>
                            Hacé clic aquí y tu pedido quedará en nuestro centro
                            pick-up para que lo retires. No olvides traer tu
                            documento de identidad o cédula o una foto de la
                            misma.
                        </p>
                        <p>¡Quedamos a las órdenes para ayudarte!</p>
                    </div>

                    <div className="look-for-my-package-footer">
                        <button>
                            <span>Quiero recogerlo</span>
                            <svg
                                width="25"
                                height="25"
                                viewBox="0 0 25 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clip-path="url(#clip0_2741_8186)">
                                    <rect
                                        x="0.5"
                                        y="0.379883"
                                        width="24"
                                        height="24"
                                        rx="4"
                                        fill="#FF7500"
                                    />
                                    <path
                                        d="M17.8327 8.37988L10.4993 15.7132L7.16602 12.3799"
                                        stroke="white"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </g>
                                <rect
                                    x="1"
                                    y="0.879883"
                                    width="23"
                                    height="23"
                                    rx="3.5"
                                    stroke="#D9632B"
                                />
                                <defs>
                                    <clipPath id="clip0_2741_8186">
                                        <rect
                                            x="0.5"
                                            y="0.379883"
                                            width="24"
                                            height="24"
                                            rx="4"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};
