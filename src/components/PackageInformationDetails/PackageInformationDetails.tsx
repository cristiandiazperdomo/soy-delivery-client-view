import business from "../../assets/images/business.svg";
import house from "../../assets/images/house.svg";
import phone from "../../assets/images/phone.svg";
import phoneOrange from "../../assets/images/phone-orange.svg";
import user from "../../assets/images/user.svg";
import {InformationDetail} from "../../interfaces/PackageInformationDetails";

const informationDetails: InformationDetail[] = [
    {
        svgIcon: phoneOrange,
        title: "Número de rastreo de soydelivery",
        value: "768543",
    },
    {
        svgIcon: phone,
        title: "Número de rastreo secundario",
        value: "768543",
    },
    {
        svgIcon: user,
        title: "Cliente",
        value: "Nombre Apellido",
    },
    {
        svgIcon: user,
        title: "Número de celular",
        value: "098162635",
    },
    {
        svgIcon: business,
        title: "Dirección",
        value: "Dirección del cliente",
    },
    {
        svgIcon: house,
        title: "Dirección de entrega",
        value: "Dirección del cliente",
    },
];

export const PackageInformationDetails = () => {
    return (
        <div className="extra-data-body">
            {informationDetails.map((el) => {
                const isDisabled: boolean =
                    el.title === "Número de rastreo secundario";

                return (
                    <div className="extra-data-item" key={el.title}>
                        <div className="extra-data-header">
                            <div
                                className={`svg-container
                        ${isDisabled ? "svg-container-disabled" : ""}
                            `}
                            >
                                <img src={el.svgIcon} alt="svg-icon" />
                            </div>
                            <div>
                                <p
                                    className={`item-title ${
                                        isDisabled ? "item-title-disabled" : ""
                                    }`}
                                >
                                    {el.title}
                                </p>
                                <p className="item-value">{el.value}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
