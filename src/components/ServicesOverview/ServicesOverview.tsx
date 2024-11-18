import {ServiceOverviewCards} from "../ServiceOverviewCards/ServiceOverviewCards";
import {PeopleHangingOutSvg} from "../Svg/PeopleHangingOutSvg";
import {SDCardAnimationSvg} from "../Svg/SDCardAnimationSvg";

export const ServicesOverview = () => {
    return (
        <div className="h-full bg-primary py-12">
            <h2 className="mb-8 text-center text-4xl text-white font-extrabold">
                ¿Qué esperás para despegar?
            </h2>
            <div className="">
                <ServiceOverviewCards />
            </div>
        </div>
    );
};
