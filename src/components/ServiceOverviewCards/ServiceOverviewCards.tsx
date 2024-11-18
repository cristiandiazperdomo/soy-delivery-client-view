import {PeopleHangingOutSvg} from "../Svg/PeopleHangingOutSvg";
import {SDCardAnimationSvg} from "../Svg/SDCardAnimationSvg";
import {OrangeButton} from "../buttons/OrangeButton/OrangeButton";
import {OutlinedButton} from "../buttons/OutlinedButton/OutlinedButton";

const cardData = [
    {
        id: 1,
        title: "Enviar con Soydelivery",
        description:
            "Llegá a tus clientes en el día, y llevá tu negocio al siguiente nivel",
        buttonText: "Contactar",
        buttonPrimary: true,
        svgComponent: <PeopleHangingOutSvg />,
    },
    {
        id: 2,
        title: "¡Te estamos buscando!",
        description: "¿Tenés un vehículo y querés trabajar con nosotros?",
        subDescription:
            "Completa el formulario y nos pondremos en contacto contigo.",
        buttonText1: "Soy particular",
        buttonText2: "Soy empresa",
        svgComponent: <SDCardAnimationSvg />,
    },
];

export const ServiceOverviewCards = () => {
    return (
        <div className="flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-8 mx-auto max-w-7xl px-4 xl:px-0">
            {cardData.map((card) => (
                <div
                    key={card.id}
                    className="flex flex-col md:flex-row bg-white rounded-xl p-6 sm:p-8 md:p-12 space-y-4 md:space-y-0 md:space-x-4 shadow-2xl w-full"
                >
                    {card.svgComponent && (
                        <div className="hidden md:flex justify-center md:justify-start md:w-1/3 pt-6 md:pt-20">
                            {card.svgComponent}
                        </div>
                    )}
                    <div className="flex flex-col justify-between w-full md:w-2/3">
                        <div className="text-center md:text-start">
                            <h3 className="text-xl md:text-2xl text-primary font-extrabold">
                                {card.title}
                            </h3>
                            <p className="text-sm md:text-base mt-4 md:mt-6 font-semibold text-zinc-800">
                                {card.description}
                            </p>
                            {card.subDescription && (
                                <p className="text-sm md:text-base mt-4 font-semibold text-zinc-800">
                                    {card.subDescription}
                                </p>
                            )}
                        </div>
                        <div
                            className={`flex flex-col sm:flex-row sm:space-x-4 ${
                                card.buttonText1 &&
                                card.buttonText2 &&
                                "justify-center"
                            } mt-6 md:mt-8 space-y-4 sm:space-y-0`}
                        >
                            {card.buttonText && (
                                <OrangeButton
                                    paddingX="px-8 mx-0 sm:mx-auto"
                                    text={card.buttonText}
                                />
                            )}
                            {card.buttonText1 && (
                                <OutlinedButton
                                    paddingX="px-6"
                                    text={card.buttonText1}
                                />
                            )}
                            {card.buttonText2 && (
                                <OrangeButton
                                    paddingX="px-6"
                                    text={card.buttonText2}
                                />
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
