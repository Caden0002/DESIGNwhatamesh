import React, { useEffect } from "react";
import { Gradient } from "../../gradient.jsx";

const Header = "The Candy Floss Company";
const subHeader =
  "Indulge in the whimsical delights of The Candy Floss Company,\nwhere fluffy, hand-spun confections bring joy and nostalgia to\nevery event.";
const Button = "Take a Bite";

function MeshGradientwhatamesh() {
  useEffect(() => {
    // Initialize the gradient after the component mounts
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
  }, []);

  return (
    <div style={{ position: "relative", height: "100vh" }}>
      {/* Canvas for the gradient background */}
      <canvas
        id="gradient-canvas"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          "--gradient-color-1": "#b851b1",
          "--gradient-color-2": "#6ec3f4",
          "--gradient-color-3": "#f8a6a6",
        }}
      />

      <div className="container h-screen mx-auto flex justify-center items-center relative">
        <div className="flex flex-col justify-start px-48 space-y-12 z-10">
          <div className="text-5xl color-animate font-Julius tracking-[16px] leading-normal">
            {Header}
          </div>
          <div className="pl-1 text-base tracking-[3px] whitespace-pre-line">
            {subHeader}
          </div>
          <button
            className="text-xs tracking-[2.5px] text-white font-bold w-40 h-10"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.1)" }}
          >
            {Button}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MeshGradientwhatamesh;
