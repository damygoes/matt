import React from "react";

const BulletPoint = ({ image, text }) => {
  return (
    <div className="flex justify-start items-center gap-2">
      <div className="text-2xl"> {image} </div>
      <div> {text} </div>
    </div>
  );
};

export default BulletPoint;
