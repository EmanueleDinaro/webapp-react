import React from "react";
import Logo from "./Logo";

function Header() {
  return (
    <header className="bg-gray-900 text-white px-8 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Logo />
        </div>
      </div>
    </header>
  );
}

export default Header;
