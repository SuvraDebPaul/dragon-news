import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex justify-between items-center gap-3 bg-base-200 p-3">
      <p className="text-base-100 bg-secondary px-3 py-2">Latest</p>
      <Marquee className="flex gap-4" pauseOnHover={true} speed={70}>
        <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde illo
          totam
        </p>
        <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde illo
          totam
        </p>
        <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde illo
          totam
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
