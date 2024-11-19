import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

import {Footer} from "../../components/Footer/Footer";
import {Header} from "../../components/Header/Header";
import {PackageInformationDetails} from "../../components/PackageInformationDetails/PackageInformationDetails";
import {Loader} from "../../components/Loader/Loader";
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

import {GrayButton} from "../../components/buttons/GrayButton/GrayButton";

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
            navigate("/");
        }
    }, [error]);

    return (
        <div>
            <Header />
            {showLoader && <Loader />}
            <div className="max-w-7xl mx-0 py-12 px-4 xl:px-0 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    <div className="">
                        <div className="flex items-center rounded-lg py-6 px-8 bg-primary text-white gap-3 text-lg">
                            <SDWhiteLogo />
                            <div className="text-center w-full">
                                <p>¡Hola {rest.clientName}!</p>
                                <p className="font-bold">
                                    {history?.length > 0 &&
                                        history[0]?.description}
                                </p>
                            </div>
                        </div>
                        <div className="rounded-lg border-[3px] border-primary py-6 px-8 mt-10">
                            <div className="flex gap-x-3">
                                <div className="flex justify-center items-center bg-primary rounded-md min-w-[28px] h-[28px]">
                                    <ClockSvg />
                                </div>
                                <span className="font-extrabold italic text-black font-simplysans text-xl">
                                    Rastreo
                                </span>
                            </div>
                            <div className="mt-10">
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
                                        <div className="flex gap-2">
                                            <div className="relative">
                                                <div
                                                    className={`${
                                                        index === 0
                                                            ? "bg-primary"
                                                            : "border-2 border-black"
                                                    } w-[10px] h-[10px] rounded-full ${
                                                        !isNotLastItem && "mr-4"
                                                    }`}
                                                ></div>

                                                {isNotLastItem && (
                                                    <div
                                                        className={`relative h-[52px] w-[20px] border-l-2 border-dashed border-gray ml-[4px] my-1.5 ${
                                                            index === 0 &&
                                                            "mt-[9px]"
                                                        }`}
                                                    >
                                                        {index === 0 && (
                                                            <div className="absolute top-0 -ml-[13px] -mt-[11px]">
                                                                <ArrowUpSvg />
                                                            </div>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                            <div>
                                                <p className="font-bold mb-2 text-black">
                                                    {point.description}
                                                </p>
                                                <p className="text-gray/70">
                                                    {formattedDate}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            {history.length > 2 && (
                                <div className="flex justify-center mt-3">
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
                    <div className="rounded-lg border-[3px] border-primary py-6 px-8 h-fit">
                        <div className="flex gap-x-3">
                            <div className="flex justify-center items-center bg-primary rounded-md min-w-[28px] h-[28px]">
                                <ListSvg />
                            </div>
                            <span className="font-extrabold italic text-black font-simplysans text-xl">
                                Información del pedido:
                            </span>
                        </div>
                        <PackageInformationDetails packageData={rest} />
                    </div>
                </div>
                <div className="rounded-lg border-[3px] border-primary mt-10 py-6 px-8 bg-primary/5">
                    <div className="flex gap-x-3">
                        <div className="flex justify-center items-center bg-primary rounded-md min-w-[28px] h-[28px]">
                            <OkWithBordersSvg />
                        </div>
                        <span className="font-extrabold italic text-black font-simplysans text-xl">
                            Quiero retirar mi paquete
                        </span>
                    </div>
                    <div className="mt-10 space-y-5">
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

                    <div className="">
                        <button
                            className="flex items-center justify-center min-h-[48px] gap-3 rounded-md px-2 bg-primary text-white font-semibold mx-auto mt-4"
                            onClick={handlePickupPackage}
                        >
                            {!pickupStatus.description ? (
                                <>
                                    <span>Quiero recoger mi pedido</span>
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
