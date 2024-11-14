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

interface PickUpStatus {
    code: number;
    description: string;
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
    pickupStatus: PickUpStatus;
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
    pickupStatus: {
        code: 200,
        description: "",
    },
    error: {
        code: 200,
        description: "",
    },
};

const {VITE_PACKAGE_QUERY_API_URL, VITE_UPDATE_ORDER_TO_PICKUP_URL} =
    import.meta.env;

export const updateOrderToPickup = createAsyncThunk(
    "package/updateOrderToPickup",
    async ({
        formData,
        dispatch,
    }: {
        formData: RequestBody;
        dispatch: Dispatch;
    }) => {
        try {
            const response = await fetch(VITE_UPDATE_ORDER_TO_PICKUP_URL, {
                method: "POST",
                body: JSON.stringify({...formData, origen: "web"}),
            });

            const data = await response.json();

            dispatch(desactiveLoader());

            return data;
        } catch (error) {
            if (error instanceof Error) console.error(error);
        }
    }
);

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
            if (error instanceof Error) console.error(error.message);
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

const mapHistory = (history: any) => {
    return history
        .map((point: any) => {
            let {PedidoHistorialDetalle, PedidoHistorialFecha} = point;

            PedidoHistorialDetalle = PedidoHistorialDetalle.toLowerCase();

            const status =
                packageStatusCodes.find((status) =>
                    PedidoHistorialDetalle.includes(status)
                ) || "pendiente";

            return {
                status,
                description: messages[status],
                date: PedidoHistorialFecha,
            };
        })
        .reverse()
        .filter((point: any) => point !== null);
};

export const packageSlice = createSlice({
    name: "package",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPackageInfo.fulfilled, (state, action) => {
                const {
                    PedidoConsultaSDT,
                    clientName,
                    trackingNumber,
                    Error_code,
                    Error_desc,
                } = action.payload;

                state.error = {code: Error_code, description: Error_desc};
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
                state.history = mapHistory(PedidoHistorial);
            })
            .addCase(updateOrderToPickup.fulfilled, (state, action: any) => {
                const {Error_code, Error_desc} = action.payload;

                state.pickupStatus = {
                    code: Error_code,
                    description: Error_desc,
                };
            });
    },
});

export default packageSlice.reducer;
