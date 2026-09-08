import BannerImg from "../assets/banner-main.png"

const Banner = () => {
    return (
            <div className="min-h-100 bg-gradient-to-r from-fuchsia-500 to-cyan-500 my-20 flex justify-center items-center">
            <img className="min-h-90%" src={BannerImg} alt="Banner" />
        </div>
    );
};

export default Banner;