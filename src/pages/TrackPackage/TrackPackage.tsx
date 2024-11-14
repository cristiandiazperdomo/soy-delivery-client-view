import {FormEvent, useRef} from "react";
import {Header} from "../../components/Header/Header";
import {Footer} from "../../components/Footer/Footer";
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

import "./TrackPackage.css";

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

        const reqBody = {
            pedidoId: trackingNumberVal,
            destinatario: clientNameVal,
        };

        dispatch(activeLoader());
        dispatch(getPackageInfo({formData: reqBody, navigate, dispatch}));
    };

    return (
        <div className="track-package">
            <Header />
            {showLoader && <Loader />}
            <div className="track-package-container">
                <div>
                    <h2 className="track-package-title">
                        Rastrea tu pedido de principio a fin
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
                <div className="representative">
                    <img src={signing} alt="people checking up" />
                </div>
            </div>
            <Footer />
        </div>
    );
};
