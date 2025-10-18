import React from "react";
import swimingImage from "../../assets/swimming.png";
import classRoom from "../../assets/class.png";
import playGround from "../../assets/playground.png";

const Qzone = () => {
  return (
    <div className="bg-base-200 p-2 rounded-lg mt-5">
      <h2 className="font-bold mb-5">Q-Zone</h2>
      <div className="space-y-5">
        <img src={swimingImage} alt="" />
        <img src={classRoom} alt="" />
        <img src={playGround} alt="" />
      </div>
    </div>
  );
};

export default Qzone;
