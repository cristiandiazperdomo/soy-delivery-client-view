import {ServiceOverviewCards} from "../ServiceOverviewCards/ServiceOverviewCards";

export const ServicesOverview = () => {
    return (
        <div className="h-full bg-primary py-12">
            <div className="max-w-7xl mx-auto">
                <h2 className="mb-8 text-center text-4xl text-white font-extrabold">
                    ¿Qué esperás para despegar?
                </h2>
                <div className="">
                    <ServiceOverviewCards />
                </div>
            </div>
        </div>
    );
};
