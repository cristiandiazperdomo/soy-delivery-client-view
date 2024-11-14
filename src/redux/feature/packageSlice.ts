import {createSlice, createAsyncThunk, Dispatch} from "@reduxjs/toolkit";
import {desactiveLoader} from "./loaderSlice";

export interface PackageError {
    code: number;
    description: string;
}

interface Status {
    status: string;
    description: string;
    date: string;
}

export interface PackageBase {
    trackingNumber: string;
    secondaryTrackingNumber: string;
    clientName: string;
    clientPhoneNumber: string;
    originAddress: string;
    deliveryAddress: string;
    [key: string]: any;
}

export interface Package extends PackageBase {
    error: PackageError;
    history: Status[];
}

interface RequestBody {
    pedidoId: string;
    destinatario: string;
}

const initialState: Package = {
    trackingNumber: "",
    secondaryTrackingNumber: "",
    clientName: "",
    clientPhoneNumber: "",
    originAddress: "",
    deliveryAddress: "",
    history: [],
    error: {
        code: 200,
        description: "",
    },
};

const {VITE_PACKAGE_QUERY_API_URL} = import.meta.env;

export const getPackageInfo = createAsyncThunk(
    "package/getPackageInfo",
    async ({
        formData,
        navigate,
        dispatch,
    }: {
        formData: RequestBody;
        navigate?: any;
        dispatch: Dispatch;
    }) => {
        try {
            const response = await fetch(VITE_PACKAGE_QUERY_API_URL, {
                method: "POST",
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            let isThereAnError = false;

            if (data.Error_code || data.error) {
                const errorCode = data.Error_code || data.error.code;
                isThereAnError = checkForError(errorCode);
            }

            if (
                navigate !== undefined &&
                dispatch !== undefined &&
                !isThereAnError
            ) {
                navigate(
                    "/informacion-del-paquete/" +
                        formData.pedidoId +
                        "/" +
                        formData.destinatario
                );
            }

            dispatch(desactiveLoader());

            return {
                ...data,
                trackingNumber: formData.pedidoId,
                clientName: formData.destinatario,
            };
        } catch (error) {
            // API always returns 200 status code
            if (error instanceof Error) console.error(error.message);
            console.log("buenas tardes");
        }
    }
);

const checkForError = (errorCode: number) => errorCode > 299 || errorCode < 200;

const packageStatusCodes = [
    "ingresado",
    "pendiente",
    "solicitado",
    "modificado",
    "aceptado",
    "retirado",
    "no entregado",
    "no retirado",
    "entregado",
    "recoordinado",
    "cancelado",
    "eliminado",
];

interface Messages {
    ingresado: string;
    pendiente: string;
    solicitado: string;
    modificado: string;
    aceptado: string;
    retirado: string;
    "no entregado": string;
    "no retirado": string;
    entregado: string;
    recoordinado: string;
    cancelado: string;
    eliminado: string;
    [key: string]: string;
}

export const messages: Messages = {
    ingresado: "Tu pedido ha llegado a Uruguay",
    pendiente: "Tu pedido está pendiente de procesamiento",
    modificado: "Tu pedido está esperando un conductor",
    solicitado: "Tu pedido ha sido solicitado",
    aceptado: "Tu pedido fue asignado a un conductor",
    retirado: "Tu pedido ha sido retirado",
    "no entregado": "Tu pedido no pudo ser entregado, seguiremos intentando.",
    "no retirado": "Tu pedido no pudo ser retirado",
    entregado: "Tu pedido ha sido entregado",
    recoordinado: "La entrega de tu pedido fue recoordinada",
    cancelado: "Tu pedido ha sido cancelado",
    eliminado: "Tu pedido ha sido eliminado",
};

export const packageSlice = createSlice({
    name: "package",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPackageInfo.fulfilled, (state, action) => {
            const {
                PedidoConsultaSDT,
                clientName,
                trackingNumber,
                Error_code,
                Error_desc,
            } = action.payload;

            state.error.code = Error_code;
            state.error.description = Error_desc;
            state.trackingNumber = trackingNumber;
            state.clientName = clientName;

            const isThereAnError = Error_code > 299 || Error_code < 200;

            if (isThereAnError) return;

            const {
                PedidoExternalId,
                PedidoTelefonoCliente,
                PedidoDireccion,
                PedidoDireccionOrigen,
                PedidoHistorial,
            } = PedidoConsultaSDT;

            state.secondaryTrackingNumber = PedidoExternalId;
            state.clientPhoneNumber = PedidoTelefonoCliente;
            state.originAddress = PedidoDireccionOrigen;
            state.deliveryAddress = PedidoDireccion;
            state.history = PedidoHistorial.map((point: any) => {
                let {PedidoHistorialDetalle, PedidoHistorialFecha} = point;

                let packageStatusIndex = 0;

                PedidoHistorialDetalle = PedidoHistorialDetalle.toLowerCase();

                for (let i = 0; i < packageStatusCodes.length; i++) {
                    if (
                        PedidoHistorialDetalle.includes(packageStatusCodes[i])
                    ) {
                        packageStatusIndex = i;
                        break;
                    }
                }

                const packageStatusCode =
                    packageStatusCodes[packageStatusIndex];

                return {
                    status: packageStatusCode,
                    description: messages[packageStatusCode],
                    date: PedidoHistorialFecha,
                };
            })
                .reverse()
                .filter((point: any) => point !== null);
        });
    },
});

export default packageSlice.reducer;
