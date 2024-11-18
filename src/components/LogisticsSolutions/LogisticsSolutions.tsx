import { Link } from "react-router-dom";
import {FlexMarketSvg} from "../Svg/FlexMarketSvg";
import {FullfilmentSvg} from "../Svg/FullfilmentSvg";
import {SameDaySvg} from "../Svg/SameDaySvg";
import {SoftwareSvg} from "../Svg/SoftwareSvg";
import {SupermarketSvg} from "../Svg/SupermarketSvg";
import {TruckSvg} from "../Svg/TruckSvg";
import {OrangeButton} from "../buttons/OrangeButton/OrangeButton";

interface Service {
    title: string;
    description: string;
    svg: any;
    buttonText?: string;
}

const services: Service[] = [
    {
        title: "Same day",
        description:
            "Retiramos y entregamos tus envíos en el día, para que tus clientes no tengan que esperar más. Tenemos soporte de 8:00 a 24:00, para que sepas en todo momento el estado de tus envíos.",
        svg: <SameDaySvg />,
    },
    {
        title: "MercadoLibre Flex",
        description:
            "Retiramos y entregamos tus envíos en el día, para que tus clientes no tengan que esperar más. Tenemos soporte de 8:00 a 24:00, para que sepas en todo momento el estado de tus envíos.",
        svg: <FlexMarketSvg />,
        buttonText: "Saber más",
    },
    {
        title: "Fulfillment",
        description:
            "Enfócate en las ventas, que la logística está nuestra! Ofrecemos un servicio integral que incluye Almacenamiento, preparación de pedidos, etiquetado, despacho y entrega de productos.",
        svg: <FullfilmentSvg />,
    },
    {
        title: "Supermercados",
        description:
            "Ofrecemos servicios de flota de vehículos para logística y distribución de productos en entrega a domicilio y envíos express, asegurando el mejor servicio al cliente y para uso flotado tercerizado o propio.",
        svg: <SupermarketSvg />,
    },
    {
        title: "Flota dedicada",
        description:
            "Somos proveedores logísticos de Mercado Libre para envíos express y de última milla, asegurando el mejor servicio en las diferentes etapas del pedido.",
        svg: <TruckSvg />,
    },
    {
        title: "Software",
        description:
            "Nuestra app de conductores ofrece una solución de trazabilidad en todas las etapas del pedido y permite que tus clientes puedan conocer el estado de sus pedidos en tiempo real y los datos que necesitan.",
        svg: <SoftwareSvg />,
    },
];

export const LogisticsSolutions = () => {
    return (
        <div className="flex flex-col items-center pb-10 px-4 bg-white">
            <h2 className="text-4xl font-extrabold mb-16">
                Conoce más sobre nuestros servicios
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center p-6 bg-white border-4 border-primary rounded-lg shadow-md transition-shadow"
                    >
                        {service.svg}
                        <h3 className="text-2xl font-semibold text-primary mb-6 mt-2">
                            {service.title}
                        </h3>
                        <p className="text-gray-900 mb-4">
                            {service.description}
                        </p>
                        {service.buttonText && (
                            <OrangeButton text={service.buttonText} />
                        )}
                    </div>
                ))}
            </div>
            <Link to="formulario-de-cliente" className="mt-8">
                <OrangeButton text="Contactar" paddingX="px-8" />
            </Link>
        </div>
    );
};
