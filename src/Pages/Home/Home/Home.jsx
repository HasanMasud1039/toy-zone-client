import Banner from "../Banner/Banner";
import Reviews from "../../Reviews/Reviews";
import CategoryToy from "../../CategoryToy/CategoryToy";
import Gallery from "../Gallery/Gallery";
import { Helmet } from "react-helmet";
import FavoriteToy from "../FavouriteToy/FavoriteToy";
import HelpKidBanner from "../HelpKidBanner/HelpKidBanner";
import Featured from "../Featured/Featured";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import NewArraival from "../NewArrival/NewArraival";
import SpecialOffer from "../SpecialOffer/SpecialOffer";

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
            <Gallery></Gallery>
            <FavoriteToy/>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;