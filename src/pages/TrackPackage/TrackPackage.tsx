import {Header} from "../../components/Header/Header";
import {Footer} from "../../components/Footer/Footer";
import signing from "../../assets/signing.svg";
import "./TrackPackage.css";

export const TrackPackage = () => {
    return (
        <div>
            <Header />
            <div className="track-order-container">
                <div>
                    <h2 className="track-order-title">Rastrea tu paquete</h2>
                    <div className="track-form">
                        <form>
                            <p className="track-package-subtext">
                                Ingresa tu número de seguimiento para saber el
                                estado de tu pedido y verifica el destinatario
                            </p>
                            <div className="track-package-input-container">
                                <input
                                    type="text"
                                    placeholder="1234567"
                                ></input>
                                <svg
                                    width="17"
                                    height="17"
                                    viewBox="0 0 17 17"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="input-decoration"
                                >
                                    <rect
                                        x="0.5"
                                        y="1"
                                        width="16"
                                        height="15"
                                        rx="5"
                                        fill="white"
                                    />
                                    <path
                                        d="M13.4017 6.21244L10.7875 3.59822L1.96453 12.4212L1.96453 15.0354L4.57875 15.0354L13.4017 6.21244Z"
                                        stroke="#FF7500"
                                    />
                                    <path
                                        d="M14.3821 5.23211L11.7679 2.61789L13.0214 1.36433C13.4119 0.973809 14.0451 0.97381 14.4356 1.36433L15.6356 2.56434C16.0262 2.95486 16.0262 3.58803 15.6356 3.97855L14.3821 5.23211Z"
                                        stroke="#FF7500"
                                    />
                                </svg>
                            </div>
                            <div className="track-package-input-container">
                                <input
                                    type="text"
                                    placeholder="Nombre del destinatario"
                                ></input>
                                <svg
                                    width="17"
                                    height="17"
                                    viewBox="0 0 17 17"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="input-decoration"
                                >
                                    <rect
                                        x="0.5"
                                        y="1"
                                        width="16"
                                        height="15"
                                        rx="5"
                                        fill="white"
                                    />
                                    <path
                                        d="M13.4017 6.21244L10.7875 3.59822L1.96453 12.4212L1.96453 15.0354L4.57875 15.0354L13.4017 6.21244Z"
                                        stroke="#FF7500"
                                    />
                                    <path
                                        d="M14.3821 5.23211L11.7679 2.61789L13.0214 1.36433C13.4119 0.973809 14.0451 0.97381 14.4356 1.36433L15.6356 2.56434C16.0262 2.95486 16.0262 3.58803 15.6356 3.97855L14.3821 5.23211Z"
                                        stroke="#FF7500"
                                    />
                                </svg>
                            </div>
                            <button className="form-button">
                                <span>Buscar</span>
                                <svg
                                    width="15"
                                    height="15"
                                    viewBox="0 0 15 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M14.1663 14.1668L12.833 12.8335M7.16634 13.5002C7.99805 13.5002 8.82161 13.3363 9.59 13.0181C10.3584 12.6998 11.0566 12.2333 11.6447 11.6452C12.2328 11.0571 12.6993 10.3589 13.0176 9.59049C13.3359 8.8221 13.4997 7.99853 13.4997 7.16683C13.4997 6.33512 13.3359 5.51156 13.0176 4.74317C12.6993 3.97477 12.2328 3.27659 11.6447 2.68849C11.0566 2.10038 10.3584 1.63387 9.59 1.31559C8.82161 0.997312 7.99805 0.833496 7.16634 0.833496C5.48664 0.833496 3.87573 1.50076 2.688 2.68849C1.50027 3.87622 0.833008 5.48712 0.833008 7.16683C0.833008 8.84653 1.50027 10.4574 2.688 11.6452C3.87573 12.8329 5.48664 13.5002 7.16634 13.5002Z"
                                        stroke="white"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>

                <div className="representative">
                    <img src={signing} alt="people checking up" />
                </div>
            </div>
            <Footer />
        </div>
    );
};
