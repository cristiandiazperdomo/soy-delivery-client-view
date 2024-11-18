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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
            {informationDetails.map((el: InformationDetail) => {
                const isDisabled: boolean =
                    el.title === "Número de rastreo externo";

                return (
                    <div className="" key={el.title}>
                        <div className="flex space-x-4">
                            <div
                                className={`flex justify-center items-center rounded-md min-w-[28px] h-[28px]
                        ${isDisabled ? "bg-gray/40" : "bg-primary"}
                            `}
                            >
                                <img src={el.svgIcon} alt="svg-icon" />
                            </div>
                            <div>
                                <p
                                    className={`font-semibold ${
                                        isDisabled ? "text-gray/70" : ""
                                    }`}
                                >
                                    {el.title}
                                </p>
                                <p className="mt-2 text-gray/70">
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
