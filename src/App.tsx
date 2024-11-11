import {BrowserRouter, Route, Routes} from "react-router-dom";
import {OrderNotificationSignup} from "./pages/OrderNotificationSignup/OrderNotificationSignup";
import "./css-normalizer.css";
import "./App.css";
import {TrackPackage} from "./pages/TrackPackage/TrackPackage";
import {PackageInformation} from "./pages/PackageInformation/PackageInformation";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/recibir-notificaciones-de-paquete"
                    element={<OrderNotificationSignup />}
                />
                <Route path="/rastrear-paquete" element={<TrackPackage />} />
                <Route
                    path="/informacion-del-paquete"
                    element={<PackageInformation />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
