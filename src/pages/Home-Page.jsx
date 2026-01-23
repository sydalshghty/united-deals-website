import Header from "../components/header/Header";
import Banner from "../components/banners.jsx/banner";
import Freedelivery from "../components/freedelivery/freedelivery";
import FeaturedProducts from "../components/featured-products/featured-products";
import ShopWithCategories from "../components/shop-Categories/shop-categories";
import BestProducts from "../components/best-products/best-products";
import NewAppleBanner from "../components/new-apple-banners/new-apple-banner";
import FlashProducts from "../components/flash-Products/flash-products";
import LatestNews from "../components/latest-news/latest-news";
import Footer from "../components/footer/footer";
function HomePage() {
    return (
        <>
            <Header />
            <Banner />
            <Freedelivery />
            <FeaturedProducts/>
            <ShopWithCategories/>
            <BestProducts/>
            <NewAppleBanner/>
            <FlashProducts/>
            <LatestNews/>
            <Footer/>
        </>
    )
}
export default HomePage;