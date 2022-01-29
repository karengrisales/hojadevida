import React from "react";
import images from "./../../assets/images";

const Information = () => {
  return (
    <div>
      <hr className="border-2 border-[#83EFF7] ml-6 mr-6 lg:hidden" />
      <div className="md:grid md:grid-cols-2 lg:grid-cols-1">
        <div>
          <h2 className="text-[#F78A83] text-4xl mt-4 text-center mb-4">
            INFORMACIÓN
          </h2>
          <ul className="ml-10 grid grid-cols-2 mb-4">
            <li className="m-2">
              Tel:
              <br />
              +57 312 843 8059
            </li>
            <li className="m-2">
              Dirección:
              <br />
              Popayán- Cauca
            </li>
            <li className="m-2">
              Correo:
              <br />
              yine_net@hotmail.com
            </li>
            <li className="m-2">
              <div className="flex flex-row">
                <a href="https://github.com/karengrisales">
                  <img
                    src={images.git}
                    alt="logo-github"
                    className="w-8 h-8 m-2"
                  />
                </a>
                <a href="https://www.linkedin.com/in/karen-grisales/">
                  <img
                    src={images.linkedin}
                    alt="logo-linkedin"
                    className="w-8 h-8 m-2"
                  />
                </a>
              </div>
            </li>
          </ul>
          <hr className="border-2 border-[#83EFF7] ml-6 mr-6 md:hidden" />
        </div>
        <div>
          <h2 className="text-[#F78A83] text-4xl mt-4 text-center mb-4">
            HABILIDADES
          </h2>
          <ul className="list-disc list-inside ml-10 grid grid-cols-2 mb-4">
            <li>HTML/CSS</li>
            <li>JavaScript</li>
            <li>ReactJS</li>
            <li>Metodologías ágiles</li>
            <li>Hubspot</li>
          </ul>
        </div>
      </div>
      <hr className="border-2 border-[#83EFF7] ml-6 mr-6 lg:hidden" />
      <div className="md:grid md:grid-cols-2 lg:grid-cols-1">
        <div>
          <h2 className="text-[#F78A83] text-4xl mt-4 text-center mb-4">
            IDIOMAS
          </h2>
          <ul className="list-disc list-inside ml-10 grid grid-cols-2 mb-4">
            <li>
              Español <br />
              Nativo
            </li>
            <li>
              Inglés <br />
              B1
            </li>
          </ul>
          <hr className="border-2 border-[#83EFF7] ml-6 mr-6 md:hidden" />
        </div>
        <div>
          <h2 className="text-[#F78A83] text-4xl mt-4 text-center mb-4">
            HOBBIES
          </h2>
          <ul className="list-disc list-inside ml-10 grid grid-cols-2 mb-4">
            <li>Viajar</li>
            <li>Ver series</li>
            <li>Escuchar música</li>
            <li>Cocinar</li>
          </ul>
        </div>
      </div>
      <hr className="border-2 border-[#83EFF7] ml-6 mr-6 lg:hidden" />
    </div>
  );
};

export default Information;
