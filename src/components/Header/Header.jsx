import React from "react";
import images from "./../../assets/images";

const Header = () => {
  return (
    <header className="flex flex-row">
      <img
        src={images.perfil}
        alt="foto-perfil"
        className="w-5/12 md:w-2/6 lg:w-1/6 ml-4 mr-5"
      />
      <div className="flex flex-col justify-center">
        <h1 className="text-[#F78A83] text-4xl mr-4 md:text-5xl lg:text-6xl">
          KAREN GRISALES
        </h1>
        <h3 className="md:text-2xl lg:text-3xl font-semibold">
          Desarrollador FrontEnd Junior
        </h3>
      </div>
    </header>
  );
};

export default Header;
