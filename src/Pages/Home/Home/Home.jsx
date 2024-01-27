import Banner from "../Banner/Banner";
import Reviews from "../Reviews/Reviews";
import Gallery from "../Gallery/Gallery";
import { Helmet } from "react-helmet";
import FavoriteToy from "../FavouriteToy/FavoriteToy";
import HelpKidBanner from "../HelpKidBanner/HelpKidBanner";
import Featured from "../Featured/Featured";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import NewArraival from "../NewArrival/NewArraival";
import SpecialOffer from "../SpecialOffer/SpecialOffer";
import ToyBox from "../ToyBox/ToyBox";
import SpecialCollection from "../SpecialCollection/SpecialCollection";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | Toy Zone</title>
            </Helmet>
            <Banner></Banner>
            <SpecialOffer/>
            <ShopByCategory/>
            <Featured/>
            <NewArraival/>
            <HelpKidBanner/>
            <SpecialCollection/>
            <Gallery></Gallery>
            <FavoriteToy/>
            <ToyBox/>
            <Reviews/>
        </div>
    );
};

export default Home;