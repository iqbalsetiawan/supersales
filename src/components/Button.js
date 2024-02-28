import React from "react";

const YellowButton = ({ text, onClick }) => {
  return (
    <button
      className="font-sans font-bold text-sm bg-amber-300 hover:bg-amber-400 text-black py-2 px-8 border-b-4 border-x-2 border-t-2 border-black rounded-full transition duration-150 ease-in-out transform hover:scale-95"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default YellowButton;
