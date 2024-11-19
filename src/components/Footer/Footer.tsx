import logo from "../../assets/images/logo.svg";

import ig from "../../assets/images/ig.svg";
import fb from "../../assets/images/fb.svg";
import linkedin from "../../assets/images/in.svg";
import tw from "../../assets/images/tw.svg";

export const Footer = () => {
    return (
        <footer className="flex items-center min-h-[246px] bg-gray">
            <div className="grid grid-cols-1 lg:grid-cols-4 items-center gap-6 w-full max-w-7xl mx-auto text-white">
                <img
                    src={logo}
                    alt="logo"
                    className="max-w-[200px] sm:max-w-[252px] max-h-auto mx-auto lg:mx-0 mt-10 lg:mt-0"
                />
                <div className="hidden lg:flex flex-col">
                    <div className="flex items-center font-extrabold">
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
                        <span className="ml-3">Montevideo</span>
                    </div>
                    <div className="ml-10">
                        <p className="text-sm">
                            Pick Up Pedidos: República Corea 2962
                        </p>
                        <p className="text-sm">Tada: San Salvador 1480</p>
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

                        <span className="ml-3 font-extrabold">Correo</span>
                    </div>
                    <div className="ml-10">
                        <p className="text-sm">comercial@soydelivery.com</p>
                        <p className="text-sm">rrhh@soydelivery.com.uy</p>
                    </div>
                </div>
                <div className="font-extrabold text-center">
                    <span className="mx-auto w-full">Seguinos en Redes</span>
                    <div className="w-[189px] mx-auto grid grid-cols-4 gap-6 justify-center pt-2">
                        {[ig, fb, linkedin, tw].map((icon, index) => (
                            <img src={icon} alt="icon" key={index} />
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};
