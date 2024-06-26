import React from 'react';
import '../../styles.css'; // Ensure this file contains the @keyframes definition

const Header = "The Candy Floss Company";
const subHeader = "Indulge in the whimsical delights of The Candy Floss Company,\nwhere fluffy, hand-spun confections bring joy and nostalgia to\nevery event.";
const Button = "Take a Bite"

function MeshGradientBackgroundLanding(props) {
    return (
<div style={{ position: 'relative', height: '100vh' }}>
  {/* Background using ::before pseudo-element */}
  <div style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1, // Ensure background is behind content
    backgroundColor: '#ff99df',
    backgroundImage: `
      radial-gradient(circle at 52% 73%, hsla(310, 85%, 67%, 1) 0px, transparent 50%),
      radial-gradient(circle at 0% 30%, hsla(197, 90%, 76%, 1) 0px, transparent 50%),
      radial-gradient(circle at 41% 26%, hsla(234, 79%, 69%, 1) 0px, transparent 50%),
      radial-gradient(circle at 41% 51%, hsla(41, 70%, 63%, 1) 0px, transparent 50%),
      radial-gradient(circle at 41% 88%, hsla(36, 83%, 61%, 1) 0px, transparent 50%),
      radial-gradient(circle at 76% 73%, hsla(346, 69%, 70%, 1) 0px, transparent 50%),
      radial-gradient(circle at 29% 37%, hsla(272, 96%, 64%, 1) 0px, transparent 50%)`,
    backgroundSize: '150% 150%',
    filter: 'blur(80px)',
    animation: 'moveBackground 10s linear infinite',
  }}></div>
            <div className="container h-screen mx-auto flex justify-center items-center ">
                          <div className="flex flex-col justify-start px-48 space-y-12">

            <div className="text-5xl color-animate font-Julius tracking-[16px] leading-normal">
                    {Header}
                </div>
                            <div className="pl-1 text-base tracking-[3px] whitespace-pre-line ">
                    {subHeader}
                </div>
                                    <button className="text-xs tracking-[2.5px] text-white font-bold w-40 h-10" style={{ backgroundColor: "rgba(0, 0, 0, 0.1)"}}>
                        {Button}
                    </button>
            </div>
        </div>
                </div>

    );
}

export default MeshGradientBackgroundLanding;