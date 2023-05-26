import React, { useEffect, useState } from "react";

const pallete = () => {
  const [position, setPosition] = useState({
    width: 0,
    height: 0,
  });
  const [pan, setPan] = useState({
    panX: "",
    panY: "",
  });

  useEffect(() => {
    updateWindowDimensions();
    window.addEventListener("resize", updateWindowDimensions);
  }, [pan]);

  const updateWindowDimensions = () => {
    setPosition({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  const handleMove = (e) => {
    const { width, height } = position;
    const gal = document.getElementById("gal");
    setPan({
      panX: (gal.offsetWidth - width) * (e.clientX / width) * -1 + "px",
      panY: (gal.offsetHeight - height) * (e.clientY / height) * 1 + "px",
    });
  };

  const { panX, panY } = pan;

  return (
    <div
      className="absolute z-0 m-0 hidden h-[100vh] w-[140vw] overflow-hidden blur-3xl transition-transform duration-[2000ms] ease-out lg:inline-block"
      onMouseMove={handleMove}
      style={{
        transform: `translate(${panX} ,${panY})`,
      }}
    >
      <div className="absolute left-[0%] bottom-[0%] h-[50%] w-[16%] scale-125 rounded-full bg-blue-400 opacity-40"></div>
      <div className="absolute left-[10%] top-[0%] h-[17%] w-[10%] scale-125 rounded-full bg-blue-400 opacity-40"></div>
      <div className="absolute left-[30%] top-[55%] h-[24%] w-[14%] scale-125 rounded-full bg-blue-400 opacity-40"></div>
      <div className="absolute left-[25%] top-[12%] h-[24%] w-[14%] scale-125 rounded-full bg-blue-400 opacity-40"></div>
      <div className="absolute left-[50%] top-[0%] m-0 h-[17%] w-[10%] scale-125 rounded-full bg-blue-400 opacity-40"></div>
      <div className="absolute left-[70%] bottom-[0%] h-[50%] w-[16%] scale-125 rounded-full bg-blue-400 opacity-40"></div>
      <div className="absolute left-[70%] top-[0%] h-[17%] w-[5%] scale-125 rounded-full bg-blue-400 opacity-40"></div>
      <div className="absolute left-[90%] bottom-[0%] h-[50%] w-[16%] scale-125 rounded-full bg-blue-400 opacity-40"></div>
      <div className="absolute left-[90%] top-[5%] h-[20%] w-[10%] scale-125 rounded-full bg-blue-400 opacity-40"></div>
      <div className="absolute left-[50%] top-[45%] h-[10%] w-[10%] scale-125 rounded-full bg-blue-400 opacity-40"></div>
    </div>
  );
};

export default pallete;
