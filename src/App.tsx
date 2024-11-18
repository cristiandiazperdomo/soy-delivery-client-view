import {BrowserRouter, Route, Routes} from "react-router-dom";
import {PackageNotificationSignup} from "./pages/PackageNotificationSignup/PackageNotificationSignup";
import {Home} from "./pages/Home/Home";
import {PackageInformation} from "./pages/PackageInformation/PackageInformation";
import {Provider} from "react-redux";
import {store} from "./redux/store";

import {ClientContactForm} from "./pages/ClientContactForm/ClientContactForm";

import "./css-normalizer.css";
import "./App.css";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/recibir-notificaciones-de-paquete"
                        element={<PackageNotificationSignup />}
                    />
                    <Route
                        path="/informacion-del-paquete/:trackingNumber/:clientName"
                        element={<PackageInformation />}
                    />
                    <Route
                        path="/formulario-de-cliente"
                        element={<ClientContactForm />}
                    />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
