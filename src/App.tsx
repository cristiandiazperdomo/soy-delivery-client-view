import {BrowserRouter, Route, Routes} from "react-router-dom";
import {PackageNotificationSignup} from "./pages/PackageNotificationSignup/PackageNotificationSignup";
import {TrackPackage} from "./pages/TrackPackage/TrackPackage";
import {PackageInformation} from "./pages/PackageInformation/PackageInformation";
import {Provider} from "react-redux";
import {store} from "./redux/store";

import "./css-normalizer.css";
import "./App.css";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/recibir-notificaciones-de-paquete"
                        element={<PackageNotificationSignup />}
                    />
                    <Route
                        path="/rastrear-paquete"
                        element={<TrackPackage />}
                    />
                    <Route
                        path="/informacion-del-paquete/:trackingNumber/:clientName"
                        element={<PackageInformation />}
                    />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
