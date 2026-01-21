import bannerImg1 from "../../assets/banner-img-1.png";
import bannerImg2 from "../../assets/banner-img-2.png";
import bannerImg3 from "../../assets/banner-img-3.png";
import "./banner.css";
import { Link } from "react-scroll";

function Banner() {
    return (
        <Link 
            to="Featured-Products"
            smooth={true}
            duration={500}
        >
            <div className="w-full h-full mt-6 mb-6 banners-departament">
                <div className="container flex min-w-[100%] h-full gap-6 justify-center">
                    <div className="slider-banners">
                        <img src={bannerImg1} alt="banner-img" className="object-contain min-w-[100%] h-full cursor-pointer" />
                    </div>
                        <div className="flex flex-col gap-5 col-banners">
                            <img src={bannerImg2} alt="banner-img" className="object-contain min-w-[100%] h-full cursor-pointer" />
                            <img src={bannerImg3} alt="banner-img" className="object-contain w-full h-full cursor-pointer" />
                        </div>
                </div>
            </div>
        </Link>
    )
}
export default Banner;