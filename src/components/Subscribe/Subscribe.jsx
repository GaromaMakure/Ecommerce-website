import React from "react";
import Banner from "../../assets/website/orange-pattern.jpg";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100",
  width: "100",
};

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="bg-gray-100 dark:bg-gray-800 text-white"
      style={BannerImg}
    >
      <div className="container backdrop-blur-sm py-10 ">
        <div>
          <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-sem">
            Get Notified about new products
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
