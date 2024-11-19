import {FormEvent, useRef} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxTypes";
import {getPackageInfo} from "../../redux/feature/packageSlice";
import {useNavigate} from "react-router-dom";
import {FormError} from "../FormError/FormError";
import {Loader} from "../Loader/Loader";
import {activeLoader} from "../../redux/feature/loaderSlice";
import {ItemInput} from "../Inputs/ItemInput/ItemInput";
import {SearchSvg} from "../Svg/SearchSvg";
import {PencilSvg} from "../Svg/PencilSvg";

import signing from "../../assets/images/signing.svg";
import temu from "../../assets/images/temulogo.png";

import {ArrowRightSvg} from "../Svg/ArrowRightSvg";
import {GrayButton} from "../buttons/GrayButton/GrayButton";

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
            <div className="grid grid-cols-1 md:grid-cols-2 justify-between w-full py-12 md:py-24 px-4 xl:px-0 max-w-7xl mx-auto">
                <div>
                    <h2 className="text-3xl md:text-5xl mb-10 font-extrabold text-center md:text-left">
                        Tecnología e innovación aplicada a tus envíos
                    </h2>
                    <img
                        src={signing}
                        alt="people checking up"
                        className="flex md:hidden w-[223px] sm:w-[340px] h-auto pb-10 mx-auto"
                    />
                    <div className="max-w-[480px] bg-primary p-5 rounded-md text-white mx-auto">
                        <form onSubmit={sendFormData}>
                            <p className="mb-5">
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
                            <div className="flex justify-end">
                                <GrayButton text="Buscar" svg={<SearchSvg />} />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="md:ml-[100px] space-y-4 flex flex-col items-center md:items-end">
                    <img
                        src={signing}
                        alt="people checking up"
                        className="hidden md:flex w-[480px] h-auto scale-x-[-1] mb-10 lg:mb-0"
                    />
                    <div className="flex flex-col md:flex-row items-end justify-between px-6 py-2 border-2 border-primary rounded-lg max-w-[480px] md:mx-0 mt-8 bg-white shadow-md">
                        <div className="flex items-center space-x-6">
                            <div className="flex flex-col items-center">
                                <p className="text-xl text-gray-900 font-semibold font-extrabold pt-2">
                                    Próximamente
                                </p>
                                <div className="flex space-x-6">
                                    <div className="rounded">
                                        <img
                                            src={temu}
                                            alt="Logo TEMU"
                                            className="min-w-[50px] sm:min-w-[70px] max-h-[50px] sm:max-h-[70px]"
                                        />
                                    </div>
                                    <p className="text-gray-900 font-semibold pt-2">
                                        ¿Querés recibir actualizaciones en todo
                                        momento de tu pedido de temu? Registrate
                                        aquí y recibí cada cambio de estado a tu
                                        correo electrónico.
                                    </p>
                                </div>
                                <div className="mt-6">
                                    <button className="flex items-center mt-4 md:mt-0 bg-[#C8C5C0] text-white py-3 px-6 rounded-md font-medium transition-colors mx-auto">
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
