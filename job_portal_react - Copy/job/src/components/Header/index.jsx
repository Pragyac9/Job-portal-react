import React from "react";


function Header() {
  return (
    <div className="mt-10 flex flex-col gap-5 items-center justify-center text-white Head">
      <h1 className="text-5xl font-bold Head__h1">
        Your ideal job awaits, start the search
      </h1>
      <p className="text-xl Head__p">Get latest job openings that best suits you!</p>
    </div>
  );
}

export default Header;
