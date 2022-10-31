import React from "react";

function Hamburger(props) {
  return (
    <>
      <div className={`space-y-2 mx-auto ${props.className}`}>
        <span className="block w-8 h-1 bg-gray-600"></span>
        <span className="block w-8 h-1 bg-gray-600"></span>
        <span className="block w-8 h-1 bg-gray-600"></span>
      </div>
    </>
  );
}

export default Hamburger;
