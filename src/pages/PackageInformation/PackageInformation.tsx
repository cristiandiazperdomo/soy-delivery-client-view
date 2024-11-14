import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

import {Footer} from "../../components/Footer/Footer";
import {Header} from "../../components/Header/Header";
import {PackageInformationDetails} from "../../components/PackageInformationDetails/PackageInformationDetails";
import {Loader} from "../../components/Loader/Loader";
import {GrayButton} from "../../components/buttons/GrayButton/GrayButton";

import {activeLoader} from "../../redux/feature/loaderSlice";
import {
    getPackageInfo,
    updateOrderToPickup,
} from "../../redux/feature/packageSlice";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxTypes";

import {ArrowDownSvg} from "../../components/Svg/ArrowDownSvg";
import {ArrowUpSvg} from "../../components/Svg/ArrowUpSvg";
import {ClockSvg} from "../../components/Svg/ClockSvg";
import {SDWhiteLogo} from "../../components/Svg/SDWhiteLogo";
import {ListSvg} from "../../components/Svg/ListSvg";
import {StarSvg} from "../../components/Svg/StarSvg";
import {OkWithBordersSvg} from "../../components/Svg/OkWithBordersSvg";

import "./PackageInformation.css";

export const PackageInformation = () => {
    const [amountOfElements, setAmountOfElements] = useState(2);

    const showLoader = useAppSelector((state) => state.loader);
    const {history, pickupStatus, error, ...rest} = useAppSelector(
        (state) => state.package
    );

    const dispatch = useAppDispatch();

    const {trackingNumber, clientName} = useParams();

    const handlePickupPackage = () => {
        const hasUserReceivedResponse = pickupStatus.description;
        if (trackingNumber && clientName && !hasUserReceivedResponse) {
            dispatch(activeLoader());
            dispatch(
                updateOrderToPickup({
                    formData: {
                        pedidoId: trackingNumber,
                        destinatario: clientName,
                    },
                    dispatch,
                })
            );
        }
    };

    const navigate = useNavigate();

    useEffect(() => {
        if (rest.clientName === "" && trackingNumber && clientName) {
            dispatch(activeLoader());
            dispatch(
                getPackageInfo({
                    formData: {
                        pedidoId: trackingNumber,
                        destinatario: clientName,
                    },
                    dispatch,
                })
            );
        }
    }, []);

    useEffect(() => {
        const isThereAnError = error.code > 299 || error.code < 200;

        if (isThereAnError) {
            navigate("/rastrear-paquete");
        }
    }, [error]);

    return (
        <div>
            <Header />
            {showLoader && <Loader />}
            <div className="package-information">
                <div className="package-information-container">
                    <div className="package-information-left">
                        <div className="banner-top">
                            <SDWhiteLogo />
                            <div className="current-status">
                                <p>¡Hola {rest.clientName}!</p>
                                <p>
                                    {history?.length > 0 &&
                                        history[0]?.description}
                                </p>
                            </div>
                        </div>
                        <div className="package-tracker">
                            <div className="package-tracker-header">
                                <div className="svg-container">
                                    <ClockSvg />
                                </div>
                                <span>Rastreo</span>
                            </div>
                            <div className="package-tracker-body">
                                {history?.map((point, index) => {
                                    if (index > amountOfElements - 1) return;

                                    const date = new Date(point.date);
                                    const formattedDate =
                                        date.toLocaleDateString() +
                                        " - " +
                                        date.toLocaleTimeString();

                                    const isNotLastItem =
                                        index < amountOfElements - 1;

                                    return (
                                        <div className="package-tracker-location">
                                            <div className="rounded-ball-container">
                                                <div
                                                    className={`${
                                                        index !== 0
                                                            ? "gray"
                                                            : ""
                                                    } rounded-ball ${
                                                        !isNotLastItem &&
                                                        "no-line"
                                                    }`}
                                                ></div>

                                                {isNotLastItem && (
                                                    <div className="line"></div>
                                                )}
                                            </div>
                                            <div className="package-tracker-status">
                                                <p>{point.description}</p>
                                                <p>{formattedDate}</p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            {history.length > 2 && (
                                <div className="package-tracker-footer">
                                    {amountOfElements === history.length ? (
                                        <>
                                            <GrayButton
                                                text="Ocultar"
                                                event={() =>
                                                    setAmountOfElements(
                                                        amountOfElements ===
                                                            history.length
                                                            ? 2
                                                            : history.length
                                                    )
                                                }
                                                svg={<ArrowUpSvg />}
                                            />
                                        </>
                                    ) : (
                                        <>
                                            <GrayButton
                                                text="Ver más"
                                                event={() =>
                                                    setAmountOfElements(
                                                        amountOfElements ===
                                                            history.length
                                                            ? 2
                                                            : history.length
                                                    )
                                                }
                                                svg={<ArrowDownSvg />}
                                            />
                                        </>
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="extra-data">
                        <div className="extra-data-header">
                            <div className="svg-container">
                                <ListSvg />
                            </div>
                            <span>Información del pedido:</span>
                        </div>
                        <PackageInformationDetails packageData={rest} />
                    </div>
                </div>
                <div className="look-for-my-package">
                    <div className="look-for-my-package-header">
                        <div className="svg-container">
                            <OkWithBordersSvg />
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
                        <button onClick={handlePickupPackage}>
                            {!pickupStatus.description ? (
                                <>
                                    <span>Quiero recogerlo</span>
                                    <StarSvg />
                                </>
                            ) : (
                                <div className="pickupStatus-response">
                                    <p className="mx-auto">
                                        {pickupStatus.description}
                                    </p>
                                </div>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};
