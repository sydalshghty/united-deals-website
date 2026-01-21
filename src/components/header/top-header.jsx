import balckImg from "../../assets/Black.svg";
import discountImg from "../../assets/Discount.svg";
import arrowRight from "../../assets/ArrowRight.svg";
import "../header/all-header.css";
import { Link } from "react-scroll";
function TopHeader() {
    return (
        <div className="w-full h-20 top-header bg-grayColor">
            <div className="container flex items-center justify-between w-full h-full min-w-[100%]">
                <div className="flex items-center gap-3 col-friday">
                    <img src={balckImg} alt="black-friday" />
                    <p className="text-2xl font-medium text-whiteColor tracking-[0.5px]">Friday</p>
                </div>
                <div className="col-discount">
                    <img src={discountImg} alt="discount-img" />
                </div>
                <Link 
                    to="Featured-Products"
                    smooth={true}
                    duration={500}
                >
                    <div className="flex items-center col-shop w-[156px] h-12 bg-yellowColor gap-2 pl-6 pr-6 rounded-sm cursor-pointer">
                        <a href="#" className="text-sm font-bold text-grayColor tracking-[0%] uppercase">Shop now</a>
                        <img src={arrowRight} alt="arrow-right" />
                    </div>
                </Link>
            </div>
        </div>
    )
}
export default TopHeader;