import React from "react";
const Overlay = ({ children }) => {
  return (
    <div className="fixed left-0 top-0 z-50 flex items-center justify-center w-screen  h-screen bg-opacity-20 bg-black">
      {children}
    </div>
  );
};

export default Overlay;
