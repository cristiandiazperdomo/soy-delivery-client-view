import {FormEvent, useRef} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxTypes";
import {getPackageInfo} from "../../redux/feature/packageSlice";
import {useNavigate} from "react-router-dom";
import {FormError} from "../../components/FormError/FormError";
import {Loader} from "../../components/Loader/Loader";
import {activeLoader} from "../../redux/feature/loaderSlice";
import {GrayButton} from "../../components/buttons/GrayButton/GrayButton";
import {ItemInput} from "../../components/Inputs/ItemInput/ItemInput";
import {SearchSvg} from "../../components/Svg/SearchSvg";
import {PencilSvg} from "../../components/Svg/PencilSvg";

import signing from "../../assets/images/signing.svg";
import temu from "../../assets/images/temulogo.png";

import "./TrackPackage.css";
import {ArrowRightSvg} from "../../components/Svg/ArrowRightSvg";

export const TrackPackage = () => {
    const trackingNumberRef = useRef<HTMLInputElement>(null);
    const clientNameRef = useRef<HTMLInputElement>(null);

    const showLoader = useAppSelector((state) => state.loader);

    const {error, clientName, trackingNumber} = useAppSelector(
        (state) => state.package
    );

    const dispatch = useAppDispatch();

    const navigate = useNavigate();

    const sendFormData = (e: FormEvent) => {
        e.preventDefault();

        const trackingNumberVal = trackingNumberRef.current?.value;
        const clientNameVal = clientNameRef.current?.value;

        const hasEmptyValues = !trackingNumberVal || !clientNameVal;

        if (hasEmptyValues) return;

        const formData = {
            pedidoId: trackingNumberVal,
            destinatario: clientNameVal,
        };

        dispatch(activeLoader());
        dispatch(getPackageInfo({formData, navigate, dispatch}));
    };

    return (
        <>
            {showLoader && <Loader />}
            <div className="track-package-container">
                <div>
                    <h2 className="track-package-title">
                        Tecnología e innovación aplicada a tus envíos
                    </h2>
                    <div className="track-form">
                        <form onSubmit={sendFormData}>
                            <p className="track-package-subtext">
                                Ingresa tu número de seguimiento para saber el
                                estado de tu pedido y verifica el destinatario
                            </p>
                            <ItemInput
                                placeholder="1234567"
                                reference={trackingNumberRef}
                                defaultValue={trackingNumber}
                                type="number"
                                svg={<PencilSvg />}
                            />
                            <ItemInput
                                placeholder="Nombre del destinatario"
                                reference={clientNameRef}
                                defaultValue={clientName}
                                type="text"
                                svg={<PencilSvg />}
                            />
                            <FormError
                                code={error.code}
                                description={error.description}
                            />
                            <GrayButton text="Buscar" svg={<SearchSvg />} />
                        </form>
                    </div>
                </div>
                <div className="lg:ml-[100px] space-y-4 flex flex-col items-center lg:items-start">
                    <img
                        src={signing}
                        alt="people checking up"
                        className="hidden lg:flex w-[500px] h-auto"
                    />
                    <div className="flex flex-col md:flex-row items-center justify-between p-6 border-2 border-primary rounded-lg max-w-[480px] lg:mx-0 mt-8 bg-white shadow-md">
                        <div className="flex items-center space-x-4">
                            <div className="rounded pl-0 sm:p-3">
                                <img
                                    src={temu}
                                    alt="Logo TEMU"
                                    className="min-w-[50px] sm:min-w-[70px] max-h-[50px] sm:max-h-[70px]"
                                />
                            </div>
                            <div className="flex flex-col">
                                <p className="text-gray-800 text-base">
                                    ¿Querés recibir actualizaciones en todo
                                    momento de tu pedido de temu? Registrate
                                    aquí y recibí cada cambio de estado a tu
                                    correo electrónico.
                                </p>
                                <div>
                                    <button className="flex items-center mt-4 md:mt-0 bg-primary text-white py-3 px-6 rounded-md font-medium hover:bg-orange-600 transition-colors mx-auto">
                                        Registrarme
                                        <ArrowRightSvg />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
