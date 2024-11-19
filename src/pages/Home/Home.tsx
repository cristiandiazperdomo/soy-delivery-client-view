import {Footer} from "../../components/Footer/Footer";
import {Header} from "../../components/Header/Header";
import {LogisticsSolutions} from "../../components/LogisticsSolutions/LogisticsSolutions";
import {TrackPackage} from "../../components/TrackPackage/TrackPackage";

export const Home = () => {
    return (
        <>
            <Header />
            <TrackPackage />
            {/* <ServicesOverview /> */}
            {/* <BusinessShippingBox /> */}
            <LogisticsSolutions />
            <Footer />
        </>
    );
};
