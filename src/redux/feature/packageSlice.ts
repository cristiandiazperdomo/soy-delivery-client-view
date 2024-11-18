import {createSlice, createAsyncThunk, Dispatch} from "@reduxjs/toolkit";
import {desactiveLoader} from "./loaderSlice";
import {NavigateFunction} from "react-router-dom";

export interface PackageError {
    code: number;
    description: string;
}

interface Status {
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
        navigate?: NavigateFunction;
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

const mapHistory = (history: any) => {
    return history
        .map((point: any) => {
            const {DiccionarioEstadoNombre, PedidoHistorialFecha} = point;

            return DiccionarioEstadoNombre
                ? {
                      description: DiccionarioEstadoNombre,
                      date: PedidoHistorialFecha,
                  }
                : null;
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
