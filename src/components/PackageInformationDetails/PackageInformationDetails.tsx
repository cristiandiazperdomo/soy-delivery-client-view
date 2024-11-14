import business from "../../assets/images/business.svg";
import house from "../../assets/images/house.svg";
import phone from "../../assets/images/phone.svg";
import phoneOrange from "../../assets/images/phone-orange.svg";
import user from "../../assets/images/user.svg";
import {InformationDetail} from "../../interfaces/PackageInformationDetails";
import {PackageBase} from "../../redux/feature/packageSlice";

const informationDetails: InformationDetail[] = [
    {
        svgIcon: phoneOrange,
        packageKey: "trackingNumber",
        title: "Número de rastreo de soydelivery",
    },
    {
        svgIcon: phone,
        packageKey: "secondaryTrackingNumber",
        title: "Número de rastreo externo",
    },
    {
        svgIcon: user,
        packageKey: "clientName",
        title: "Cliente",
    },
    {
        svgIcon: user,
        packageKey: "clientPhoneNumber",
        title: "Número de celular",
    },
    {
        svgIcon: business,
        packageKey: "originAddress",
        title: "Dirección",
    },
    {
        svgIcon: house,
        packageKey: "deliveryAddress",
        title: "Dirección de entrega",
    },
];

export const PackageInformationDetails = ({
    packageData,
}: {
    packageData: PackageBase;
}) => {
    return (
        <div className="extra-data-body">
            {informationDetails.map((el: InformationDetail) => {
                const isDisabled: boolean =
                    el.title === "Número de rastreo externo";

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
                                <p className="item-value">
                                    {packageData[el.packageKey]}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
