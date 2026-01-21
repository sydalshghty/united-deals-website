import twitterIcon from "../../assets/twitter.svg";
import facebookIcon from "../../assets/Facebook.svg";
import pinterestIcon from "../../assets/Pinterest.svg";
import redditIcon from "../../assets/Reddit.svg";
import youtubeIcon from "../../assets/Youtube.svg";
import instagramIcon from "../../assets/Instagram.svg";
import arrowDownIcon from "../../assets/arrowdown.svg";
import "../header/all-header.css";
function CenterHeader() {
    const socialIcons = [
        { id: 1, icon: twitterIcon },
        { id: 2, icon: facebookIcon },
        { id: 3, icon: pinterestIcon },
        { id: 4, icon: redditIcon },
        { id: 5, icon: youtubeIcon },
        { id: 6, icon: instagramIcon }
    ]

    return (
        <div className="center-header w-full h-[52px] bg-secondaryColor">
            <div className="container min-w-[100%] h-full flex justify-between items-center">
                <p className="text-sm text-whiteColor welcome-p">Welcome to Clicon online eCommerce store.</p>
                <div className="flex gap-6 all-follow-us-content">
                    <div className="flex items-center gap-3 pr-5 border-r-[1px] follow-us-content border-whiteColor">
                        <p className="text-sm text-whiteColor">Follow us:</p>
                        <div className="flex items-center gap-3 all-icons-social">
                            {socialIcons.map((icon, index) => {
                                return (
                                    <img key={icon.id} src={icon.icon} alt="icon-social" className="w-4 h-4 cursor-pointer" />
                                )
                            })}
                        </div>
                    </div>
                    <div className="flex gap-2 cursor-pointer col-lang">
                        <p className="text-sm text-whiteColor">Eng</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CenterHeader;