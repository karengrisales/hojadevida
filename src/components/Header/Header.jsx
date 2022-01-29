import React from "react";
import images from "./../../assets/images";

const Header = () => {
  return (
    <header className="flex flex-row justify-center">
      <img src={images.perfil} alt="foto-perfil" className="w-5/12" />
      <div className="flex flex-col justify-center">
        <h1 className="text-[#F78A83] text-4xl mr-4">KAREN GRISALES</h1>
        <h3>Desarrollador FrontEnd Junior</h3>
      </div>
    </header>
  );
};

export default Header;
