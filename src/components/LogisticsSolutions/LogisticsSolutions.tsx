import {SameDaySvg} from "../Svg/SameDaySvg";

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
        svg: <SameDaySvg />,
        buttonText: "Saber más",
    },
    {
        title: "Fulfillment",
        description:
            "Enfócate en las ventas, que la logística está nuestra! Ofrecemos un servicio integral que incluye Almacenamiento, preparación de pedidos, etiquetado, despacho y entrega de productos.",
        svg: <SameDaySvg />,
    },
    {
        title: "Supermercados",
        description:
            "Ofrecemos servicios de flota de vehículos para logística y distribución de productos en entrega a domicilio y envíos express, asegurando el mejor servicio al cliente y para uso flotado tercerizado o propio.",
        svg: <SameDaySvg />,
    },
    {
        title: "Flota dedicada",
        description:
            "Somos proveedores logísticos de Mercado Libre para envíos express y de última milla, asegurando el mejor servicio en las diferentes etapas del pedido.",
        svg: <SameDaySvg />,
    },
    {
        title: "Software",
        description:
            "Nuestra app de conductores ofrece una solución de trazabilidad en todas las etapas del pedido y permite que tus clientes puedan conocer el estado de sus pedidos en tiempo real y los datos que necesitan.",
        svg: <SameDaySvg />,
    },
];

export const LogisticsSolutions = () => {
    return (
        <div className="flex flex-col items-center py-10 px-4 bg-white">
            <h2 className="text-4xl font-extrabold mb-8">
                Conoce más sobre nuestros servicios
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center p-6 bg-white border-4 border-primary rounded-lg shadow-md hover:shadow-2xl transition-shadow"
                    >
                        {service.svg}
                        <h3 className="text-2xl font-semibold text-primary mb-6 mt-2">
                            {service.title}
                        </h3>
                        <p className="text-gray-600 mb-4 font-semibold">
                            {service.description}
                        </p>
                        {service.buttonText && (
                            <button className="mt-auto bg-primary text-white py-2 px-4 rounded hover:bg-orange-600 transition-colors">
                                {service.buttonText}
                            </button>
                        )}
                    </div>
                ))}
            </div>
            <button className="mt-8 bg-primary text-white py-3 px-8 rounded-lg hover:bg-orange-600 transition-colors">
                Contactar
            </button>
        </div>
    );
};
