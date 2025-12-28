import React from "react";

const Header = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent z-20 flex items-center px-10">
      <img
        className="w-36"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix Logo"
      />
    </div>
  );
};

export default Header;
